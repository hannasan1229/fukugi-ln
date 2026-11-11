<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  heightClass: {
    type: String,
    default: "h-56",
  },
  roundedClass: {
    type: String,
    default: "",
  },

  // 🔥 NEU HIER
  objectPosition: {
    type: String,
    default: "object-center",
  },
})

const loaded = ref(false)

const wrapperClass = computed(() => [
  "relative w-full overflow-hidden",
  props.heightClass,
  props.roundedClass,
])
</script>

<template>
  <div :class="wrapperClass">
    <!-- Skeleton -->
    <div
      v-if="!loaded"
      class="absolute inset-0 bg-slate-200 animate-pulse"
    ></div>

    <!-- Image -->
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      loading="lazy"
      decoding="async"
      @load="loaded = true"
    />
  </div>
</template>
