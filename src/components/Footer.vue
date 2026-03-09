<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

defineProps({
  title: String,
  company: String,
  address: String,
  phone: String,
  email: String,
  copyright: String,
});

const route = useRoute();

const lang = computed(() => route.path.split("/")[1] || "jp");
</script>

<template>
  <footer class="bg-slate-100 text-lime-900 border-t border-lime-200 py-10">
    <div class="max-w-6xl mx-auto px-6 text-sm">
      <h3 class="text-base font-semibold mb-4">
        <router-link
          :to="`/${lang}/privacy`"
          class="underline hover:text-lime-700 transition"
        >
          {{ title }}
        </router-link>
      </h3>

      <ul class="space-y-1 leading-relaxed">
        <li class="font-medium">{{ company }}</li>
        <li>{{ address }}</li>
        <li><span class="font-medium">Tel:</span> {{ phone }}</li>
        <li>
          <span class="font-medium">Email:</span>
          <a :href="`mailto:${email}`" class="underline">
            {{ email }}
          </a>
        </li>
      </ul>

      <p class="mt-6 text-xs text-gray-500">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>
