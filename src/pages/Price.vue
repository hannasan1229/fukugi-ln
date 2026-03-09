<!-- src/components/Price.vue -->
<script setup>
defineProps({
  pageTitle: String,
  pageIntro: String,

  interpreting: Object,
  translation: Object,
  coaching: Object,

  coachingNote: String, // 👈 NEU

  conditionsTitle: String,
  conditions: Array,
});
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-4 sm:px-10 pt-12 sm:pt-16 pb-16 sm:pb-20 space-y-10"
  >
    <!-- PAGE HEADER -->
    <header class="max-w-full">
      <h1 class="text-4xl font-bold text-lime-900">
        {{ pageTitle }}
      </h1>
      <p class="mt-4 text-lime-700 max-w-prose leading-relaxed">
        {{ pageIntro }}
      </p>
    </header>

    <!-- ================= DOLMETSCHEN ================= -->
    <section class="bg-amber-50 rounded-3xl p-6 sm:p-8 lg:p-12">
      <div class="space-y-8">
        <!-- LEFT -->
        <header class="lg:col-span-4">
          <h2 class="text-3xl font-bold text-lime-900">
            {{ interpreting.title }}
          </h2>
          <p class="mt-3 text-lime-700">
            {{ interpreting.description }}
          </p>
        </header>

        <!-- RIGHT -->
        <div class="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
          <!-- BUSINESS -->
          <div class="bg-slate-50 rounded-3xl p-6 border">
            <span class="badge-business">Business</span>

            <ul class="space-y-4 text-sm mt-6">
              <li
                v-for="(item, i) in interpreting.business"
                :key="i"
                class="flex justify-between border-b pb-2"
              >
                <span>{{ item.label }}</span>
                <strong>{{ item.price }}</strong>
              </li>
            </ul>
          </div>

          <!-- PRIVATE -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border">
            <span class="badge-private">Private</span>

            <p class="text-sm text-gray-700 mt-6">
              {{ interpreting.private.text }}
            </p>

            <ul
              v-if="interpreting.private.notes?.length"
              class="mt-4 space-y-1 text-sm text-gray-700"
            >
              <li
                v-for="(note, i) in interpreting.private.notes"
                :key="i"
                class="flex items-center gap-2"
              >
                <span class="w-2 h-2 bg-slate-500 border-b rounded-full"></span>
                <span>{{ note }}</span>
              </li>
            </ul>

            <p class="mt-6 text-sm">
              <strong>{{ interpreting.private.price }}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= ÜBERSETZEN ================= -->
    <section class="bg-amber-50 rounded-3xl p-6 sm:p-8 lg:p-12">
      <div class="space-y-8">
        <header>
          <h2 class="text-3xl font-bold text-lime-900">
            {{ translation.title }}
          </h2>
          <p class="mt-4 text-lime-700 break-words">
            {{ translation.description }}
          </p>
        </header>

        <div class="space-y-8">
          <!-- STANDARD -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border w-full">
            <h3 class="font-semibold mb-4">
              {{ translation.standard.title }}
            </h3>

            <ul class="space-y-3 text-sm">
              <li
                v-for="(item, i) in translation.standard.prices"
                :key="i"
                class="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 border-b pb-2"
              >
                <span>{{ item.label }}</span>
                <strong>{{ item.price }}</strong>
              </li>
            </ul>
          </div>

          <!-- EXTRA CARDS -->
          <div class="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
            <div
              v-for="(card, i) in translation.extras"
              :key="i"
              class="bg-slate-50 rounded-2xl p-6 sm:p-8 border w-full"
            >
              <span class="badge-business">Business</span>
              <h4 class="font-semibold mt-4 mb-2">
                {{ card.title }}
              </h4>
              <p class="text-sm text-gray-700 mt-6 text-wrap">
                {{ card.text }}
              </p>
              <p class="mt-4 font-medium">
                {{ card.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= COACHING ================= -->
    <section class="bg-amber-50 rounded-3xl p-6 sm:p-8 lg:p-12">
      <div class="space-y-8">
        <!-- LEFT -->
       <header class="lg:col-span-4">
          <h2 class="text-3xl font-bold text-lime-900">
            {{ coaching.title }}
          </h2>
          <p class="mt-3 text-lime-700 whitespace-normal md:whitespace-nowrap">
            {{ coaching.description }}
          </p>

          <p class="mt-4 text-lime-700">
            {{ coachingNote }}
          </p>
        </header>

        <!-- RIGHT (wie Interpreting) -->
        <div class="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
          <div
            v-for="(card, i) in coaching.cards"
            :key="i"
            :class="[
              card.type === 'Business' ? 'bg-slate-50' : 'bg-white',
              'rounded-3xl p-6 sm:p-8 border h-full',
            ]"
          >
            <span
              :class="[
                card.type === 'Business' ? 'badge-business' : 'badge-private',
              ]"
            >
              {{ card.type === "Business" ? "Business" : "Private" }}
            </span>

            <p class="text-sm text-gray-700 mt-6">
              {{ card.text }}
            </p>

            <p class="mt-6 text-sm font-semibold">
              {{ card.price }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= KONDITIONEN ================= -->
    <section>
      <h3 class="text-lg font-semibold text-lime-900 p-2">
        {{ conditionsTitle }}
      </h3>

      <ul class="space-y-4">
        <li
          v-for="(c, i) in conditions"
          :key="i"
          class="grid grid-cols-[0.75rem_1fr] gap-2 text-sm text-gray-700 leading-relaxed"
        >
          <span class="text-gray-500 text-base mt-[0.05rem]">•</span>

          <span>{{ c }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.badge-business {
  @apply inline-block text-xs font-semibold tracking-wide
  text-lime-800 bg-amber-100 px-3 py-1 rounded-full;
}
.badge-private {
  @apply inline-block text-xs font-semibold tracking-wide
  text-gray-600 bg-gray-100 px-3 py-1 rounded-full;
}
</style>
