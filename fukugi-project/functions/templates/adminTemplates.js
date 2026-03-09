const { baseMailLayout } = require("./baseMailLayout");

function adminTemplateDE(name, email, message) {
  return baseMailLayout({
    headline: "Neue Kontaktanfrage",
    content: `
      <p><strong>Name:</strong><br/>${name}</p>
      <p><strong>E-Mail:</strong><br/>${email}</p>
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-line;">${message}</pre>
    `,
    footerNote:
      "Automatisch über das Kontaktformular gesendet.",
  });
}

function adminTemplateEN(name, email, message) {
  return baseMailLayout({
    headline: "New contact request",
    content: `
      <p><strong>Name:</strong><br/>${name}</p>
      <p><strong>Email:</strong><br/>${email}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-line;">${message}</pre>
    `,
    footerNote:
      "Automatically sent via the website contact form.",
  });
}

function adminTemplateJP(name, email, message) {
  return baseMailLayout({
    headline: "新しいお問い合わせ",
    content: `
      <p><strong>お名前:</strong><br/>${name}</p>
      <p><strong>メール:</strong><br/>${email}</p>
      <p><strong>内容:</strong></p>
      <pre style="white-space:pre-line;">${message}</pre>
    `,
    footerNote:
      "ウェブサイトのお問い合わせフォームから自動送信されました。",
  });
}

module.exports = {
  adminTemplateDE,
  adminTemplateEN,
  adminTemplateJP,
};
