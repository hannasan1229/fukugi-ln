const fs = require("fs");

// 🔹 dieselben Templates wie Firebase
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

/* ===============================
   PREVIEW CONFIG
================================ */

const previewConfig = {
  type: "admin",   // "user" | "admin"
  lang: "jp",     // "de" | "en" | "jp"
};

/* ===============================
   DATA (Mock)
================================ */

const mockData = {
  name: "Maho Fukuda",
  email: "maho.fukuda@gmx.net",
  message: `Hallo Fukugi,

ich hätte gerne ein Angebot
für ein neues Projekt.

Viele Grüße`,
};

/* ===============================
   TEMPLATE SELECTION
================================ */

let html;

if (previewConfig.type === "user") {
  if (previewConfig.lang === "de") html = userTemplateDE(mockData.name);
  if (previewConfig.lang === "en") html = userTemplateEN(mockData.name);
  if (previewConfig.lang === "jp") html = userTemplateJP(mockData.name);
}

if (previewConfig.type === "admin") {
  if (previewConfig.lang === "de")
    html = adminTemplateDE(
      mockData.name,
      mockData.email,
      mockData.message
    );

  if (previewConfig.lang === "en")
    html = adminTemplateEN(
      mockData.name,
      mockData.email,
      mockData.message
    );

  if (previewConfig.lang === "jp")
    html = adminTemplateJP(
      mockData.name,
      mockData.email,
      mockData.message
    );
}

/* ===============================
   WRITE FILE
================================ */

fs.writeFileSync("preview.html", html, "utf8");
console.log("✅ preview.html wurde erstellt – jetzt im Browser öffnen");
