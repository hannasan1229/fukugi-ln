import { createRouter, createWebHistory } from "vue-router";

import HomeJP from "@/pages/jp/Home.vue";
import PriceJP from "@/pages/jp/Price.vue";
import ExamplesJP from "@/pages/jp/Examples.vue";

import HomeDE from "@/pages/de/Home.vue";
import PriceDE from "@/pages/de/Price.vue";
import ExamplesDE from "@/pages/de/Examples.vue";

import HomeEN from "@/pages/en/Home.vue";
import PriceEN from "@/pages/en/Price.vue";
import ExamplesEN from "@/pages/en/Examples.vue";

import PrivacyDE from "@/pages/de/Privacy.vue";
import PrivacyEN from "@/pages/en/Privacy.vue";
import PrivacyJP from "@/pages/jp/Privacy.vue";

/* 🌍 Titel-Definitionen */
const titles = {
  jp: {
    home: "ミュンヘン日本語通訳・翻訳｜福田真帆（Fukugi Translation）",
    price: "料金｜ミュンヘン日本語通訳・翻訳",
    examples: "通訳の流れ｜福田真帆",
    privacy: "プライバシーポリシー｜Fukugi Translation",
  },
  de: {
    home: "Japanische Dolmetscherin in München | Fukugi Translation",
    price: "Preise | Japanische Dolmetscherin München",
    examples: "Ablauf | Fukugi Translation",
    privacy: "Datenschutz | Fukugi Translation",
  },
  en: {
    home: "Japanese Interpreter in Munich | Fukugi Translation",
    price: "Pricing | Japanese Interpreter Munich",
    examples: "Workflow | Fukugi Translation",
    privacy: "Privacy Policy | Fukugi Translation",
  },
};

const routes = [
  { path: "/", redirect: "/jp" },

  { path: "/jp", component: HomeJP, meta: { lang: "jp", page: "home" } },
  { path: "/de", component: HomeDE, meta: { lang: "de", page: "home" } },
  { path: "/en", component: HomeEN, meta: { lang: "en", page: "home" } },

  { path: "/jp/price", component: PriceJP, meta: { lang: "jp", page: "price" } },
  { path: "/de/price", component: PriceDE, meta: { lang: "de", page: "price" } },
  { path: "/en/price", component: PriceEN, meta: { lang: "en", page: "price" } },

  { path: "/jp/examples", component: ExamplesJP, meta: { lang: "jp", page: "examples" } },
  { path: "/de/examples", component: ExamplesDE, meta: { lang: "de", page: "examples" } },
  { path: "/en/examples", component: ExamplesEN, meta: { lang: "en", page: "examples" } },

  { path: "/jp/privacy", component: PrivacyJP, meta: { lang: "jp", page: "privacy" } },
  { path: "/de/privacy", component: PrivacyDE, meta: { lang: "de", page: "privacy" } },
  { path: "/en/privacy", component: PrivacyEN, meta: { lang: "en", page: "privacy" } },
];

const descriptions = {
  jp: {
    home: "ミュンヘンを拠点に、日本語・ドイツ語・英語の通訳・翻訳サービスを提供。ビジネス・技術・プライベート対応。",
    price: "日本語通訳・翻訳サービスの料金案内。ミュンヘン対応。",
    examples: "通訳サービスの流れと対応内容についてご紹介します。",
    privacy: "Fukugi Translationのプライバシーポリシー。",
  },
  de: {
    home: "Professionelle Japanisch–Deutsch & Japanisch–Englisch Dolmetscherin in München. Business, Technik & private Anliegen.",
    price: "Preise für Japanisch Dolmetschen und Übersetzen in München.",
    examples: "Ablauf und Beispiele für professionelle Dolmetschleistungen.",
    privacy: "Datenschutzerklärung von Fukugi Translation.",
  },
  en: {
    home: "Professional Japanese–German & Japanese–English interpreter in Munich. Business, technical and private support.",
    price: "Pricing for Japanese interpreting and translation services in Munich.",
    examples: "Workflow and examples of professional interpreting services.",
    privacy: "Privacy policy of Fukugi Translation.",
  },
};

const hreflangMap = {
  home: {
    ja: "https://fukugi-ln.com/jp",
    de: "https://fukugi-ln.com/de",
    en: "https://fukugi-ln.com/en",
  },
  price: {
    ja: "https://fukugi-ln.com/jp/price",
    de: "https://fukugi-ln.com/de/price",
    en: "https://fukugi-ln.com/en/price",
  },
  examples: {
    ja: "https://fukugi-ln.com/jp/examples",
    de: "https://fukugi-ln.com/de/examples",
    en: "https://fukugi-ln.com/en/examples",
  },
  privacy: {
    ja: "https://fukugi-ln.com/jp/privacy",
    de: "https://fukugi-ln.com/de/privacy",
    en: "https://fukugi-ln.com/en/privacy",
  },
};

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* ✅ ZENTRAL: Sprache + Title setzen */
router.afterEach((to) => {
  const lang = to.meta.lang || "jp";
  const page = to.meta.page || "home";

  /* 1️⃣ <html lang=""> */
  document.documentElement.lang = lang;

  /* 2️⃣ <title> */
  document.title = titles[lang][page];

  /* 3️⃣ Meta-Description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && descriptions[lang]?.[page]) {
    metaDesc.setAttribute("content", descriptions[lang][page]);
  }

  /* 4️⃣ 🔥 hreflang – alte entfernen */
  document
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());

  /* 5️⃣ 🔥 hreflang – neue setzen */
  const links = hreflangMap[page];
  if (links) {
    Object.entries(links).forEach(([hreflang, href]) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    });

    /* x-default */
    const xDefault = document.createElement("link");
    xDefault.setAttribute("rel", "alternate");
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.setAttribute("href", links.ja);
    document.head.appendChild(xDefault);
  }
});

/* ⬇️ DAS IST KRITISCH */
export default router;