<script setup>
defineProps({
  title: String,
  intro: String,
  steps: Array,
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-3xl font-bold mb-4 text-lime-900">
      {{ title }}
    </h2>

    <p class="text-lime-800 mb-12 max-w-2xl">
      {{ intro }}
    </p>

    <!-- Timeline -->
    <div class="relative border-l-2 border-lime-600 pl-8 space-y-12">
      <div
        v-for="(step, i) in steps"
        :key="i"
        class="relative"
      >
        <!-- Number -->
        <span
          class="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-lime-700 text-white flex items-center justify-center text-sm font-semibold"
        >
          {{ i + 1 }}
        </span>

        <!-- Content -->
        <div class="bg-amber-50 rounded-xl p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-lime-900 mb-2">
            {{ step.title }}
          </h3>
          <p class="text-sm text-lime-800 leading-relaxed">
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
