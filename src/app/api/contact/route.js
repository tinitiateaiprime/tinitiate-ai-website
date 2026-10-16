import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { createContactFormHandler } from '@/lib/contactFormsServer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const POST = createContactFormHandler(
  async (input, region) => {
    const client = new SESClient({ region });
    try {
      return await client.send(new SendEmailCommand(input));
    } finally {
      client.destroy();
    }
  },
  () => ({
    region: process.env.SES_REGION || process.env.AWS_REGION,
    from: process.env.CONTACT_FORM_FROM,
    to: process.env.CONTACT_FORM_TO || 'contact@tinitiateai.com',
  }),
);
