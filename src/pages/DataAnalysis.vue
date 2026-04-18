<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Beispiel: Sprache aus Route (oder Store)
const route = useRoute();

const lang = computed(() => {
  return route.path.startsWith("/en") ? "en"
       : route.path.startsWith("/jp") ? "ja"
       : "de";
});
</script>

<template>
  <iframe
    :src="`https://app.fukugi-ln.com?lang=${lang}`"
    class="app-frame"
  />
</template>