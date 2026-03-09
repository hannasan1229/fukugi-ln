<!-- src/components/Privacy.vue -->
<script setup>
defineProps({
  imprintTitle: String,
  imprintText: Array,
  privacyTitle: String,
  privacySections: Array,
});
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 py-16 text-lime-900 space-y-16">
    <!-- IMPRESSUM -->
    <div>
      <h1 class="text-2xl font-bold mb-4">
        {{ imprintTitle }}
      </h1>

      <ul class="text-sm text-gray-700 space-y-2">
        <li v-for="(line, i) in imprintText" :key="i">
          {{ line }}
        </li>
      </ul>
    </div>

    <!-- DATENSCHUTZ -->
    <div>
      <h1 class="text-2xl font-bold mb-6">
        {{ privacyTitle }}
      </h1>

      <div class="space-y-6">
        <div
          v-for="(section, i) in privacySections"
          :key="i"
        >
          <h2 class="text-lg font-semibold mb-2">
            {{ section.heading }}
          </h2>
          <p class="text-sm text-gray-700 leading-relaxed">
            {{ section.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
