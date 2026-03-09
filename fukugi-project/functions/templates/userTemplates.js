const { baseMailLayout } = require("./baseMailLayout");

function userTemplateDE(name) {
  return baseMailLayout({
    headline: "Vielen Dank für Ihre Anfrage",
    content: `
      <p>Liebe/r <strong>${name}</strong>,</p>
      <p>
        vielen Dank für Ihre Nachricht.<br/>
        Wir melden uns so bald wie möglich bei Ihnen.
      </p>
      <p style="margin-top:32px;">
        Freundliche Grüße<br/>
        <strong>Fukugi</strong>
      </p>
    `,
    footerNote:
      "Hinweis: Bitte prüfen Sie auch Ihren Spam-Ordner.",
  });
}

function userTemplateEN(name) {
  return baseMailLayout({
    headline: "Thank you for your inquiry",
    content: `
      <p>Dear <strong>${name}</strong>,</p>
      <p>
        Thank you for your message.<br/>
        We will get back to you as soon as possible.
      </p>
      <p><strong>Fukugi</strong></p>
    `,
    footerNote:
      "Please also check your spam folder.",
  });
}

function userTemplateJP(name) {
  return baseMailLayout({
    headline: "お問い合わせありがとうございます",
    content: `
      <p><strong>${name}</strong> 様</p>
      <p>
        お問い合わせいただきありがとうございます。<br/>
        内容を確認の上、できるだけ早くご連絡いたします。
      </p>
      <p><strong>Fukugi</strong></p>
    `,
    footerNote:
      "迷惑メールフォルダもご確認ください。",
  });
}

module.exports = {
  userTemplateDE,
  userTemplateEN,
  userTemplateJP,
};
