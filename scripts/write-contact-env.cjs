const fs = require('node:fs');

// Amplify build variables must be explicitly made available to the Next.js runtime.
// Only copy these non-secret contact settings; AWS access uses the SSR compute role.
const keys = ['SES_REGION', 'CONTACT_FORM_FROM', 'CONTACT_FORM_TO'];
const lines = keys.filter((key) => process.env[key]).map((key) => {
  const value = process.env[key];
  if (/[\r\n"\\$`]/.test(value)) throw new Error(`Invalid contact setting: ${key}`);
  return `${key}="${value}"`;
});
if (lines.length) fs.appendFileSync('.env.production', `\n${lines.join('\n')}\n`);
