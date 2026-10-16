# Contact form delivery on AWS Amplify

The old forms submitted to Netlify, which does not process submissions hosted on Amplify.
All three enquiry forms now POST to `/api/contact`, which sends the details through Amazon SES.
The destination defaults to `contact@tinitiateai.com`. Visitor email is used as Reply-To.
The endpoint reports success only after SES acknowledges the message. This means SES accepted
the email, not that inbox delivery is guaranteed. There is no separate submissions database.

## Required AWS setup

1. In Amazon SES, select **US East (N. Virginia) / us-east-1** and verify `contact@tinitiateai.com` or the
   `tinitiateai.com` domain. If SES is in sandbox mode, the recipient must also be verified.
2. In Amplify > Hosting > Environment variables, set:

   ```text
   SES_REGION=us-east-1
   CONTACT_FORM_FROM=contact@tinitiateai.com
   CONTACT_FORM_TO=contact@tinitiateai.com
   ```

   The SES identity must be verified in `us-east-1`; verification in another region does not apply.
3. Create the email permission policy in **IAM > Policies > Create policy > JSON**.
   Name it `TinitiateContactEmailPolicy`:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Effect": "Allow",
       "Action": "ses:SendEmail",
       "Resource": "arn:aws:ses:us-east-1:ACCOUNT_ID:identity/contact@tinitiateai.com"
     }]
   }
   ```

   Replace `ACCOUNT_ID` with your 12-digit AWS account ID. This example uses an email identity.
   If you verified the domain instead, change the resource to
   `arn:aws:ses:us-east-1:ACCOUNT_ID:identity/tinitiateai.com`.

   Then open **IAM > Roles > Create role > Custom trust policy** and paste:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Effect": "Allow",
       "Principal": { "Service": "amplify.amazonaws.com" },
       "Action": "sts:AssumeRole"
     }]
   }
   ```

   Choose **Next**, select `TinitiateContactEmailPolicy`, and create the role with the name
   `TinitiateAmplifyContactRole`.

   Attach it at **Amplify > your app > App settings > IAM roles > Compute role > Edit**.
   Select `TinitiateAmplifyContactRole` as the role for your deployed branch and **Save**.
   You can use the Default role selector if all branches should use it. For public repositories
   with preview branches, assign it only to the branch that needs email delivery.
   The permission belongs on the **Compute role**. A build/service role alone does not provide
   credentials to the running contact API.
4. Deploy this code. The included `amplify.yml` copies only the contact settings into
   `.env.production` so Next.js can read them at runtime. If you already customize the build
   specification in the Amplify console, add `node scripts/write-contact-env.cjs` before
   `npm run build` there too. Keep the app configured for Next.js server rendering, and ensure
   custom SPA rewrite rules do not redirect `/api/contact` to a static HTML page.
5. Submit the callback page, homepage callback modal, and homepage mentor guidance form.
   Confirm the request returns JSON `{"success":true}` and the email reaches the inbox.
   Check spam and SES delivery/bounce metrics if SES accepts the message but it is not visible.

## Local verification

```sh
node --test scripts/contact-forms.test.mjs
npx eslint src/lib/contactForms.js src/lib/contactFormsServer.js src/lib/netlifyForms.js src/app/api/contact/route.js scripts/contact-forms.test.mjs scripts/write-contact-env.cjs
npm run build
```

Automated tests use a fake mail transport and do not send real emails. To test actual SES delivery
locally, supply the three settings in `.env.local` and authenticate with an authorized AWS profile.

## AWS references

- [SES email sending requirements](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)
- [Amplify SSR compute roles](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html)
- [Amplify server runtime environment variables](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-environment-variables.html)
