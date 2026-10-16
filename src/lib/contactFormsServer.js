const FIELDS = ['name', 'email', 'phone', 'course', 'preferredTime', 'message', 'source', 'topicType', 'originalFormName'];
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const MAX_BODY_BYTES = 20000;

function json(body, status) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export function createContactFormHandler(sendEmail, getConfig) {
  return async function POST(request) {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) {
      return json({ error: 'Please submit this form from our website.' }, 403);
    }
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.startsWith('application/x-www-form-urlencoded')) {
      return json({ error: 'Unsupported form format.' }, 415);
    }
    if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) {
      return json({ error: 'The form is too large.' }, 413);
    }
    let fields;
    try {
      const reader = request.body?.getReader();
      const chunks = [];
      let size = 0;
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          size += value.byteLength;
          if (size > MAX_BODY_BYTES) {
            await reader.cancel();
            return json({ error: 'The form is too large.' }, 413);
          }
          chunks.push(value);
        }
      }
      const data = new URLSearchParams(await new Blob(chunks).text());
      if (data.get('website')) return json({ error: 'Unable to submit this form.' }, 400);
      fields = Object.fromEntries(FIELDS.map((key) => [key, (data.get(key) || '').trim()]));
      if (Object.values(fields).some((value) => value.length > 4000)) {
        return json({ error: 'Please shorten your form entries.' }, 400);
      }
      if (!fields.name || !fields.phone) {
        return json({ error: 'Please enter your name and phone number.' }, 400);
      }
      const digits = fields.phone.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 15 || !/^[+\d\s().-]+$/.test(fields.phone)) {
        return json({ error: 'Please enter a valid phone number.' }, 400);
      }
      if (fields.email && (!EMAIL.test(fields.email) || /[\r\n]/.test(fields.email))) {
        return json({ error: 'Please enter a valid email address.' }, 400);
      }
    } catch {
      return json({ error: 'Unable to read the form. Please try again.' }, 400);
    }
    const config = getConfig();
    if (!config.region || !EMAIL.test(config.from || '') || !EMAIL.test(config.to || '')) {
      console.error('Contact form email configuration is missing or invalid.');
      return json({ error: 'Form delivery is temporarily unavailable. Please email contact@tinitiateai.com.' }, 503);
    }
    try {
      const result = await sendEmail({
        Source: config.from,
        Destination: { ToAddresses: [config.to] },
        ...(fields.email ? { ReplyToAddresses: [fields.email] } : {}),
        Message: {
          Subject: { Data: 'New Tinitiate website enquiry', Charset: 'UTF-8' },
          Body: { Text: { Charset: 'UTF-8', Data: [
            'New enquiry from the Tinitiate website',
            `Received: ${new Date().toISOString()}`,
            ...FIELDS.map((key) => `${key}: ${fields[key] || '(not provided)'}`),
          ].join('\n\n') } },
        },
      }, config.region);
      if (!result?.MessageId) throw new Error('Email service did not acknowledge the request.');
      return json({ success: true }, 200);
    } catch (error) {
      console.error('Contact form email delivery failed:', error?.name || 'UnknownError');
      return json({ error: 'Your request could not be sent. Please try again or email contact@tinitiateai.com.' }, 502);
    }
  };
}
