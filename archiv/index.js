const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { logger } = require("firebase-functions");
const axios = require("axios");

/* ===============================
   Firestore Trigger
================================ */

exports.onContactCreated = onDocumentCreated(
  {
    document: "contactRequests/{id}",
    region: "europe-west3",
    secrets: [
      "ZOHO_CLIENT_ID",
      "ZOHO_CLIENT_SECRET",
      "ZOHO_REFRESH_TOKEN",
      "ZOHO_ACCOUNT_ID",
    ],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const { name, email, message, lang } = data;

    logger.info("📩 Neue Kontaktanfrage", { email, lang });


    const templates = {
      de: {
        adminSubject: `Neue Anfrage von ${name}`,
        adminHtml: adminTemplateDE(name, email, message),
        userSubject: "Vielen Dank für Ihre Anfrage",
        userHtml: userTemplateDE(name),
      },
      en: {
        adminSubject: `New inquiry from ${name}`,
        adminHtml: adminTemplateEN(name, email, message),
        userSubject: "Thank you for your inquiry",
        userHtml: userTemplateEN(name),
      },
      jp: {
        adminSubject: `${name}様からのお問い合わせ`,
        adminHtml: adminTemplateJP(name, email, message),
        userSubject: "お問い合わせありがとうございます",
        userHtml: userTemplateJP(name),
      },
    };

    const t = templates[lang] || templates.de;

    const token = await getZohoAccessToken();
    const ZOHO_FROM = "contact@fukugi-ln.com";

    // Admin-Mail
    await sendZohoMail(token, {
      from: ZOHO_FROM,
      to: ZOHO_FROM,
      subject: t.adminSubject,
      html: t.adminHtml,
    });

    // User-Mail
    await sendZohoMail(token, {
      from: ZOHO_FROM,
      to: email,
      subject: t.userSubject,
      html: t.userHtml,
    });
  }
);

/* ===============================
   Zoho OAuth
================================ */

async function getZohoAccessToken() {
  const params = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const res = await axios.post(
    "https://accounts.zoho.eu/oauth/v2/token",
    params.toString(),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      timeout: 10000,
    }
  );

  return res.data.access_token;
}

async function sendZohoMail(token, { from, to, subject, html }) {
  logger.info("📤 Sending Zoho Mail", { to, subject });

  try {
    const res = await axios.post(
      `https://mail.zoho.eu/api/accounts/${process.env.ZOHO_ACCOUNT_ID}/messages`,
      {
        fromAddress: from,
        toAddress: to,
        subject,
        content: html,
        mailFormat: "html",
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    logger.info("✅ Zoho Mail sent", { to });
    return res.data;
  } catch (err) {
    logger.error("❌ Zoho Mail failed", {
      message: err.message,
      response: err.response?.data,
    });
    throw err;
  }
}

/* ===============================
   Base Layout
================================ */

function baseMailLayout({ headline, content, footerNote }) {
  return `
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

  `;
}


/* ===============================
   User Templates
================================ */
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


/* ===============================
   Admin Templates
================================ */

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


