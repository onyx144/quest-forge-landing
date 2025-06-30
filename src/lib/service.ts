export async function sendContactForm(data: any) {
  const response = await fetch('https://back.questalize.com/mail.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
} 
export async function sendConsoltationForm(data: any) {
    const response = await fetch('https://back.questalize.com/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
} 
export async function sendDemoForm(data: any) {
  const response = await fetch('https://back.questalize.com/demo.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
} //update coment