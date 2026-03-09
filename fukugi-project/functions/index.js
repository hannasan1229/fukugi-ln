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

const {
  userTemplateDE,
  userTemplateEN,
  userTemplateJP,
} = require("./templates/userTemplates");

const {
  adminTemplateDE,
  adminTemplateEN,
  adminTemplateJP,
} = require("./templates/adminTemplates");




