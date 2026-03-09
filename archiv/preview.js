const fs = require("fs");

/* ===============================
   Base Layout (identisch zu index.js)
================================ */

function baseMailLayout({ headline, content, footerNote }) {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Mail Preview</title>
</head>
<body style="margin:0; padding:0; background:#f8f8f4;">

<div style="
  max-width:600px;
  margin:18px auto;
  background:#fffbe9;
  font-family:Arial, sans-serif;
  color:#222;
  border-radius:12px;
  padding:24px 0;
">

  <div style="text-align:center; margin-bottom:24px;">
    <img
      src="https://konoha-tech.web.app/logo.png"
      alt="Fukugi"
      style="max-width:140px;"
    />
  </div>

  <div style="max-width:420px; margin:0 auto;">

    <h1 style="
      text-align:center;
      color:#5a8f00;
      font-size:26px;
      font-weight:700;
      margin:0 71px 28px -5px;
      white-space:nowrap;
    ">
      ${headline}
    </h1>

    <div style="font-size:16px; line-height:1.6;white-space:nowrap;">
      ${content}
    </div>

    ${footerNote
      ? `<p style="margin-top:28px; font-size:12px; color:#666;">
            ${footerNote}
          </p>`
      : ""
    }

  </div>
</div>

</body>
</html>
`;
}

function userTemplateDE(name) {
  return baseMailLayout({
    headline: "Vielen Dank für Ihre Anfrage",
    content: `
      <p>Liebe/r <strong>${name}</strong>,</p>

      <p>
        vielen Dank für Ihre Nachricht.<br />
        Wir melden uns so bald wie möglich bei Ihnen.
      </p>

      <p style="margin-top:32px;">
        Freundliche Grüße<br />
        <strong>Fukugi</strong>
      </p>
    `,
    footerNote:
      "Hinweis: Bitte prüfen Sie auch Ihren Spam-Ordner.",
  });
}

function userTemplateEN(name) {
  return baseMailLayout({
    headline: "Thank you very much for your inquiry",
    content: `
      <p>Dear <strong>${name}</strong>,</p>


      <p>
        Thank you very much for your inquiry.<br />
        We will get back to you shortly.
      </p>

      <p style="margin-top:32px;">
        Kind regards<br />
        <strong>Fukugi</strong>
      </p>
    `,
    footerNote:
      "Hinweis: Please also check your spam folder.",
  });
}

function userTemplateJP(name) {
  return baseMailLayout({
    headline: "お問い合わせありがとうございます",
    content: `
      <p><strong>${name}</strong> 様</p>
      <p>
        この度はお問い合わせいただき、誠にありがとうございます。<br/>
        内容を確認の上、できるだけ早くご連絡いたします。
      </p>

      <p>
        敬具<br/>
        <b>Fukugi-ln</b>
      </p>
    `,
    footerNote:
      "迷惑メールフォルダもご確認ください。",
  });
}

function adminTemplateDE(name, email, message) {
  return baseMailLayout({
    headline: "Neue Kontaktanfrage",
    content: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-line;">${message}</pre>
    `,
    footerNote: "Automatisch über Kontaktformular gesendet.",
  });
}


function adminTemplateDE(name, email, message) {
  return baseMailLayout({
    headline: "Neue Kontaktanfrage",
    content: `
      <p><strong>Name:</strong><br/>${name}</p>
      <p><strong>E-Mail:</strong><br/>${email}</p>
      <p><strong>Nachricht:</strong></p>
      <pre style="white-space:pre-line;">${message}</pre>
    `,
    footerNote: "Automatisch über das Kontaktformular gesendet.",
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
    footerNote: "Automatically sent via contact form.",
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
    footerNote: "お問い合わせフォームから自動送信されました。",
  });
}


const previewConfig = {
  type: "user", // "user" | "admin"
  lang: "en",    // "de" | "en" | "jp"
};

let html;

if (previewConfig.type === "user") {
  if (previewConfig.lang === "de") html = userTemplateDE("Maho Fukuda");
  if (previewConfig.lang === "en") html = userTemplateEN("Maho Fukuda");
  if (previewConfig.lang === "jp") html = userTemplateJP("Maho Fukuda");
}

if (previewConfig.type === "admin") {
  if (previewConfig.lang === "de")
    html = adminTemplateDE("Maho Fukuda", "maho@gmx.net", "Test Nachricht");
  if (previewConfig.lang === "en")
    html = adminTemplateEN("Maho Fukuda", "maho@gmx.net", "Test message");
  if (previewConfig.lang === "jp")
    html = adminTemplateJP("Maho Fukuda", "maho@gmx.net", "テストメッセージ");
}


fs.writeFileSync("preview.html", html, "utf8");
console.log("✅ preview.html wurde erstellt – jetzt im Browser öffnen");

