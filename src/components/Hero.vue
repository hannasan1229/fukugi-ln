<script setup>
import heroBg from "@/assets/images/hero-background.jpg";

defineProps({
  title: String,
  subtitle: String,
  cta: String,
});
</script>

<template>
  <section class="relative w-full bg-black">
    <!-- Image -->
    <img
      :src="heroBg"
      alt=""
      class="w-full h-[60vh] md:h-[80vh] max-h-[520px] md:max-h-none object-cover object-top md:object-center"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div
      class="absolute inset-0 flex items-center justify-center text-center text-white px-6"
    >
      <div>
        <h1
          class="text-l sm:text-xl md:text-2xl font-bold mb-2 leading-tight"
          v-html="title"
        />

        <p
          class="text-sm sm:text-base md:text-lg mb-6 leading-snug"
          v-html="subtitle"
        />

        <a
          href="#contact"
          class="inline-block bg-lime-800 px-6 py-3 rounded-full hover:bg-lime-700"
        >
          {{ cta }}
        </a>
      </div>
    </div>
  </section>
</template>
