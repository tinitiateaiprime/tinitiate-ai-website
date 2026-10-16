export async function submitContactForm(formElement) {
  const formData = new FormData(formElement);
  const formName = formData.get('form-name') || formElement.getAttribute('name');
  if (formName && !formData.get('originalFormName')) formData.set('originalFormName', formName);
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: new URLSearchParams(formData).toString(),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    throw new Error(result?.error || 'Your request could not be sent. Please try again.');
  }
  return result;
}
