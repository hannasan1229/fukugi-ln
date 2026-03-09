<script setup>
import Privacy from "@/pages/Privacy.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Privacy
    imprintTitle="Legal Notice"
    :imprintText="[
      'Fukugi Translation & Interpretation Service',
      'Owner: Maho Fukuda',
      'Munich, Germany',
      'Email: contact@fukugi-ln.com'
    ]"

    privacyTitle="Privacy Policy"
    :privacySections="[
      {
        heading: 'General Information',
        text: 'This website is intended to provide information about my professional services.'
      },
      {
        heading: 'Contact',
        text: 'Personal data is only processed if you actively contact me. The data provided will be used solely to respond to your inquiry.'
      },
      {
        heading: 'Data Sharing',
        text: 'Your personal data will not be shared with third parties.'
      }
    ]"
  />

   <!-- Footer -->
  <Footer
    title="Legal Notice"
    company="Fukugi Translation Services"
    address="Munich, Germany"
    phone="+49 (available upon request) "
    email="contact@fukugi-ln.com"
  />
</template>
