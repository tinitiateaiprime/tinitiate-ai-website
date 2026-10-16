import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createContactFormHandler } from '../src/lib/contactFormsServer.js';
import { submitContactForm } from '../src/lib/contactForms.js';

const config = () => ({ region: 'ap-south-1', from: 'contact@example.com', to: 'contact@example.com' });
const valid = { name: 'Test User', phone: '+91 98765 43210', email: 'visitor@example.com', source: 'Homepage', course: 'Python', preferredTime: 'Evening', message: 'Please call me' };
function request(fields = valid, headers = {}) {
  return new Request('https://example.com/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', origin: 'https://example.com', ...headers },
    body: new URLSearchParams(fields),
  });
}

test('delivers all lead details to the configured inbox and sets visitor reply-to', async () => {
  let sent;
  const handler = createContactFormHandler(async (input, region) => {
    sent = input;
    assert.equal(region, 'ap-south-1');
    return { MessageId: 'test-only' };
  }, config);
  const response = await handler(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.deepEqual(sent.Destination.ToAddresses, ['contact@example.com']);
  assert.deepEqual(sent.ReplyToAddresses, ['visitor@example.com']);
  for (const value of Object.values(valid)) assert.ok(sent.Message.Body.Text.Data.includes(value));
});

test('mentor guidance permits optional email', async () => {
  const handler = createContactFormHandler(async (input) => {
    assert.equal(input.ReplyToAddresses, undefined);
    return { MessageId: 'test-only' };
  }, config);
  assert.equal((await handler(request({ ...valid, email: '' }))).status, 200);
});

test('rejects invalid input before attempting email delivery', async () => {
  let calls = 0;
  const handler = createContactFormHandler(async () => { calls++; }, config);
  for (const fields of [{ ...valid, name: '' }, { ...valid, phone: 'abc' }, { ...valid, email: 'bad\r\nemail@example.com' }, { ...valid, message: 'x'.repeat(4001) }, { ...valid, website: 'spam' }]) {
    assert.equal((await handler(request(fields))).status, 400);
  }
  assert.equal(calls, 0);
});

test('rejects requests from another website', async () => {
  const handler = createContactFormHandler(async () => assert.fail('must not send'), config);
  assert.equal((await handler(request(valid, { origin: 'https://other.example' }))).status, 403);
});

test('rejects unsupported and oversized payloads', async () => {
  const handler = createContactFormHandler(async () => assert.fail('must not send'), config);
  assert.equal((await handler(request(valid, { 'content-type': 'application/json' }))).status, 415);
  assert.equal((await handler(request({ ...valid, message: 'x'.repeat(21000) }))).status, 413);
});

test('missing server configuration never reports success', async () => {
  const handler = createContactFormHandler(async () => assert.fail('must not send'), () => ({}));
  assert.equal((await handler(request())).status, 503);
});

test('email provider failure or missing acknowledgement never reports success', async () => {
  for (const send of [async () => { throw new Error('provider failure'); }, async () => ({})]) {
    const handler = createContactFormHandler(send, config);
    const response = await handler(request());
    assert.equal(response.status, 502);
    assert.equal((await response.json()).success, undefined);
  }
});

test('browser posts to the API and rejects a static HTML success response', async (t) => {
  t.mock.method(globalThis, 'FormData', function () {
    return new URLSearchParams({ ...valid, 'form-name': 'mentor-guidance' });
  });
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, '/api/contact');
    assert.equal(new URLSearchParams(options.body).get('originalFormName'), 'mentor-guidance');
    return new Response('<html>Static page</html>', { status: 200 });
  });
  await assert.rejects(submitContactForm({}), /could not be sent/);
});

test('browser only reports success for acknowledged submissions', async (t) => {
  t.mock.method(globalThis, 'FormData', function () {
    return new URLSearchParams({ ...valid, 'form-name': 'request-callback' });
  });
  t.mock.method(globalThis, 'fetch', async () => Response.json({ success: true }));
  assert.deepEqual(await submitContactForm({}), { success: true });
});
