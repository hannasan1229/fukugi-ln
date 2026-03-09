<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <Nav />
    <router-view />
  </div>
</template>
