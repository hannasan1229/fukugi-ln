<script setup>
defineProps({
  pageTitle: String,
  intro: String,
  lang: String,

  demoTitle: String,
  demoText: String,
  demoButtonText: String,
});
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-4 sm:px-10 pt-12 pb-16 space-y-10"
  >

    <!-- HEADER -->
    <header class="space-y-4">
      <h1 class="text-4xl font-bold text-lime-900">
        {{ pageTitle }}
      </h1>

      <p class="text-lime-700 text-lg leading-relaxed max-w-3xl">
        {{ intro }}
      </p>
    </header>

    <!-- DEMO CARD -->
    <div
      class="rounded-3xl border border-lime-200 bg-gradient-to-br from-white to-lime-50 p-8 shadow-sm"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >

        <!-- LEFT -->
        <div class="max-w-3xl">
          <h2 class="text-2xl font-bold text-lime-900">
            {{ demoTitle }}
          </h2>

          <p class="mt-4 text-lime-700 leading-relaxed">
            {{ demoText }}
          </p>
        </div>

        <!-- RIGHT -->
        <div class="shrink-0">
          <a
            href="https://fukugi-battery-demo.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-lime-700 text-white font-medium hover:bg-lime-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            {{ demoButtonText }}
          </a>
        </div>

      </div>
    </div>

  </section>
</template>