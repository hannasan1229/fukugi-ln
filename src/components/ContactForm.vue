<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"; // 👈 NEU
import { sendContactRequest } from "@/services/contact";

defineProps({
  title: String,
  successMessage: String,
  namePlaceholder: String,
  emailPlaceholder: String,
  messagePlaceholder: String,
  buttonText: String,
});

const name = ref("");
const email = ref("");
const message = ref("");
const loading = ref(false);

// 🌍 Sprache aus URL
const route = useRoute();
const lang = route.path.split("/")[1] || "jp";

const fallbackSuccess = {
  de: "Vielen Dank! Ihre Anfrage wurde gesendet.",
  en: "Thank you! Your message has been sent.",
  jp: "お問い合わせありがとうございます。送信が完了しました。",
};

const sent = ref(false);

async function submit() {
  try {
    loading.value = true;

    await sendContactRequest(
      name.value,
      email.value,
      message.value,
      lang, // 👈 HIER kommt die Sprache rein
    );

    sent.value = true;

    name.value = "";
    email.value = "";
    message.value = "";
  } catch (err) {
    alert(err.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section id="contact" class="bg-gray-50 py-8 border-t border-lime-200">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-amber-100"
      >
        <!-- Header -->
        <h2 class="text-2xl font-bold text-lime-900 mb-4">
          {{ title }}
        </h2>

        <!-- 👇 MEHRSPRACHIGE ZEILE -->
        <p v-if="sent">
          {{ successMessage || fallbackSuccess[lang] }}
        </p>

        <!-- Form -->
        <div class="space-y-6">
          <input
            v-model="name"
            :placeholder="namePlaceholder"
            class="w-full px-4 py-3 rounded-xl bg-amber-50/60 text-lime-900 placeholder-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600"
          />

          <input
            v-model="email"
            type="email"
            :placeholder="emailPlaceholder"
            class="w-full px-4 py-3 rounded-xl bg-amber-50/60 text-lime-900 placeholder-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600"
          />

          <textarea
            v-model="message"
            :placeholder="messagePlaceholder"
            rows="5"
            class="w-full px-4 py-3 rounded-xl bg-amber-50/60 text-lime-900 placeholder-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 resize-none"
          ></textarea>

          <!-- CTA -->
          <button
            @click="submit"
            :disabled="loading"
            class="w-full mt-6 py-3 rounded-xl font-medium bg-lime-800 text-white hover:bg-lime-700 transition disabled:opacity-50"
          >
            {{ loading ? "…" : buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
