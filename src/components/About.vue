<!-- src/components/About.vue -->
<script setup>
import { ref } from "vue";
import ServiceImage from "@/components/ServiceImage.vue";
import { serviceImages } from "@/data/serviceImages";
import profileImage from "@/assets/profile-placeholder.jpg";

defineProps({
  profileTitle: String,
  profileText: Array,
  careerTitle: String,
  careerTimeline: Array,

  serviceTitle: String,
  businessTitle: String,
  privateTitle: String,
  businessServices: Array,
  privateServices: Array,
});

const activeTab = ref("Profile");

const tabs = [
  { id: "Profile", label: "Profile" },
  { id: "Service", label: "Service" },
];

function showTab(tab) {
  activeTab.value = tab;
}
</script>

<template>
  <!-- Tabs -->

  <div class="flex justify-center gap-6 relative">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="showTab(tab.id)"
      class="relative px-6 py-2 font-medium transition"
      :class="
        activeTab === tab.id
          ? 'bg-amber-200 text-lime-900 rounded-t-2xl'
          : 'text-lime-900 hover:text-lime-700'
      "
    >
      {{ tab.label }}

      <!-- Dreieck -->
      <span
        v-if="activeTab === tab.id"
        class="absolute left-1/2 -bottom-0.5 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-amber-50 z-20"
      ></span>
    </button>
  </div>

  <!-- Profile -->
  <section
    v-if="activeTab === 'Profile'"
    class="relative z-10 max-w-7xl mx-auto px-6 pt-2 pb-10 bg-amber-50 text-lime-900 rounded-b-2xl"
  >
    <div class="flex flex-col lg:flex-row mt-10 gap-10 pl-5">
      <!-- LEFT: Text + Timeline -->
      <div class="lg:col-span-7">
        <h2 class="text-3xl font-bold mb-6">{{ profileTitle }}</h2>

        <p
          v-for="(p, i) in profileText"
          :key="i"
          class="mb-4 text-lime-800 leading-relaxed"
        >
          {{ p }}
        </p>

        <!-- Career Timeline -->
        <h3 class="text-2xl font-semibold mt-12 mb-6">
          {{ careerTitle }}
        </h3>

        <div class="border-l-2 border-lime-700 pl-6 space-y-8">
          <div
            v-for="(item, i) in careerTimeline"
            :key="i"
            class="flex items-start gap-4"
          >
            <span
              class="inline-block w-3 h-3 aspect-square bg-lime-700 rounded-full flex-shrink-0 mt-1.5"
            ></span>
            <div>
              <p class="font-semibold">{{ item.date }}</p>
              <p class="text-lime-800 text-sm leading-relaxed">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Portrait -->
      <div class="lg:col-span-5 flex flex-col lg:items-end">
        <div class="w-40 h-40">
          <ServiceImage
            :src="profileImage"
            alt="Portrait"
            heightClass="h-40 w-40"
            roundedClass="rounded-full border-2 border-amber-200"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section
    v-if="activeTab === 'Service'"
    class="max-w-7xl mx-auto px-6 pt-4 pb-12 bg-amber-50 text-lime-900 rounded-b-2xl"
  >
    <h2 class="text-3xl font-bold text-center mb-10">
      {{ serviceTitle }}
    </h2>

    <h3 class="text-2xl font-semibold mb-6 text-center">
      {{ businessTitle }}
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, i) in businessServices"
        :key="item.key"
        class="bg-slate-50 border rounded-xl overflow-hidden"
      >
        <ServiceImage
          :src="serviceImages.business[item.key]"
          :alt="item.title"
        />

        <div class="p-6">
          <h4 class="text-lg font-semibold text-lime-800">
            {{ item.title }}
          </h4>
          <p class="text-sm text-gray-700 mt-2">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold mb-6 text-center pt-5">
      {{ privateTitle }}
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, i) in privateServices"
        :key="item.key"
        class="bg-white border rounded-xl overflow-hidden"
      >
        <ServiceImage
          :src="serviceImages.private[item.key]"
          :alt="item.title"
        />

        <div class="p-6">
          <h4 class="text-lg font-semibold text-lime-800">
            {{ item.title }}
          </h4>
          <p class="text-sm text-gray-700 mt-2">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <p class="mt-8 text-xs text-gray-400 text-center">
      Service illustrations designed by Freepik
    </p>
  </section>
</template>
