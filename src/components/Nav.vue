<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import deFlag from "@/assets/flags/de.png";
import enFlag from "@/assets/flags/en.png";
import jpFlag from "@/assets/flags/jp.png";

const route = useRoute();
const router = useRouter();

const mobileOpen = ref(false);
const langOpen = ref(false);

// Aktuelle Sprache aus URL
const lang = computed(() => route.path.split("/")[1] || "jp");

// Navigation
function goTo(page) {
  router.push(`/${lang.value}/${page}`);
  mobileOpen.value = false;
}

// Sprachwechsel (gleiche Seite behalten)
function switchLang(newLang) {
  const path = route.path;

  // Home-Seiten explizit behandeln
  if (path === "/jp" || path === "/de" || path === "/en") {
    router.push(`/${newLang}`);
  } else {
    const rest = path.split("/").slice(2).join("/");
    router.push(`/${newLang}/${rest}`);
  }

  langOpen.value = false;
  mobileOpen.value = false;
}

/* =========================
   🌍 Mehrsprachige Labels
========================= */
const labels = {
  de: {
    home: "Home",
    price: "Preise",
    examples: "Ablauf",
  },
  en: {
    home: "Home",
    price: "Pricing",
    examples: "Workflow",
  },
  jp: {
    home: "ホーム",
    price: "料金",
    examples: "流れ",
  },
};

const menuItems = computed(() => [
  { key: "home", path: "" },
  { key: "price", path: "price" },
  { key: "examples", path: "examples" },
]);

/* =========================
   🎨 Elegante Hover-Klasse
========================= */
const navItemClass = (path) => {
  const isActive =
    route.path === `/${lang.value}/${path}` ||
    (path === "" && route.path === `/${lang.value}`);

  return [
    "relative cursor-pointer px-1 py-0.5 transition-all duration-300",
    "text-lime-900 hover:text-lime-700",
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px]",
    "after:bg-lime-600 after:transition-all after:duration-300",
    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
  ];
};
</script>

<template>
  <nav
    class="bg-slate-100/80 backdrop-blur border-b border-lime-100 sticky top-0 z-[100] overflow-visible"
  >
    <div class="max-w-7xl mx-auto flex justify-between px-6 h-14 relative">
      <!-- Logo -->
      <div class="relative h-full w-[180px]">
        <img
          src="@/assets/logo.png"
          alt="Fukugi Logo"
          class="absolute -top-3 left-0 h-20 w-auto object-contain"
        />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-8 font-medium">
        <li
          v-for="item in menuItems"
          :key="item.key"
          @click="goTo(item.path)"
          :class="navItemClass(item.path)"
        >
          {{ labels[lang][item.key] }}
        </li>

        <!-- Language Dropdown -->
        <div class="relative">
          <button
            @click="langOpen = !langOpen"
            class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-700 bg-slate-50 text-lime-800 hover:bg-slate-200 hover:border-lime-400 active:bg-slate-300 transition shadow-sm"
          >
            🌐
            <svg
              class="w-3 h-3"
              viewBox="0 0 320 512"
              aria-hidden="true"
              fill="currentColor"
            >
              <path
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0L160 273.7l96.5-113.9c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.4-24.6 9.4-34 0z"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-show="langOpen"
            class="absolute right-0 mt-2 bg-white border border-lime-200 rounded-xl shadow-lg w-40 z-[200]"
          >
            <button
              @click="switchLang('de')"
              class="flex items-center gap-2 px-3 py-2 w-full hover:bg-amber-50"
            >
              <img :src="deFlag" class="w-5 h-3" /> Deutsch
            </button>

            <button
              @click="switchLang('en')"
              class="flex items-center gap-2 px-3 py-2 w-full hover:bg-amber-50"
            >
              <img :src="enFlag" class="w-5 h-3" /> English
            </button>

            <button
              @click="switchLang('jp')"
              class="flex items-center gap-2 px-3 py-2 w-full hover:bg-amber-50"
            >
              <img :src="jpFlag" class="w-5 h-3" /> 日本語
            </button>
          </div>
        </div>
      </ul>

      <!-- Mobile Button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 text-lime-800"
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileOpen"
      class="md:hidden bg-white border-t px-6 py-6 space-y-4"
    >
      <button
        v-for="item in menuItems"
        :key="item.key"
        @click="goTo(item.path)"
        class="block w-full text-left text-lime-900 font-medium"
      >
        {{ labels[lang][item.key] }}
      </button>

      <hr />

      <div class="flex space-x-4">
        <button @click="switchLang('de')">
          <img :src="deFlag" class="w-6 h-4 rounded-sm" />
        </button>
        <button @click="switchLang('en')">
          <img :src="enFlag" class="w-6 h-4 rounded-sm" />
        </button>
        <button @click="switchLang('jp')">
          <img :src="jpFlag" class="w-6 h-4 rounded-sm" />
        </button>
      </div>
    </div>
  </nav>
</template>
