<script setup>
import Privacy from "@/pages/Privacy.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Privacy
    imprintTitle="Impressum"
    :imprintText="[
      'Fukugi Übersetzungsservice',
      'Inhaberin: Maho Fukuda',
      'München, Deutschland',
      'E-Mail: contact@fukugi-ln.com'
    ]"

    privacyTitle="Datenschutzerklärung"
    :privacySections="[
      {
        heading: 'Allgemeiner Hinweis',
        text: 'Diese Website dient ausschließlich der Information.'
      },
      {
        heading: 'Kontaktaufnahme',
        text: 'Personenbezogene Daten werden nur verarbeitet, wenn Sie mich aktiv kontaktieren.'
      },
      {
        heading: 'Weitergabe',
        text: 'Eine Weitergabe an Dritte erfolgt nicht.'
      }
    ]"
  />

  <Footer
    title="Impressum"
    company="Fukugi Übersetzungsservice"
    address="München, Deutschland"
    phone="+49 auf Anfrage"
    email="contact@fukugi-ln.com"
  />

</template>
