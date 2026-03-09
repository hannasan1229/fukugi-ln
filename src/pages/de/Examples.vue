<script setup>
import Examples from "@/pages/Examples.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Examples
    title="Auftragsablauf"
    intro="Transparenter und strukturierter Ablauf – damit Sie jederzeit wissen, was Sie erwartet."
    :steps="[
      {
        title: 'Anfrage & Angebot',
        text: 'Nach Ihrer Anfrage klären wir gemeinsam Bedarf, Rahmenbedingungen und Termin. Auf dieser Basis erhalten Sie ein verbindliches Angebot.',
      },
      {
        title: 'Beauftragung',
        text: 'Mit Ihrer schriftlichen Bestätigung gilt der Auftrag als verbindlich.',
      },
      {
        title: 'Organisation & Vorbereitung',
        text: 'Inhaltliche und organisatorische Vorbereitung auf den Termin auf Basis der bereitgestellten Informationen.',
      },
      {
        title: 'Durchführung',
        text: 'Professionelle Dolmetschleistung vor Ort oder online.',
      },
      {
        title: 'Nachbereitung',
        text: 'Klärung offener Punkte und – sofern vereinbart – optionale Zusammenfassung.',
      },
      {
        title: 'Abrechnung',
        text: 'Transparente Abrechnung gemäß der vereinbarten Leistungen.',
      },
    ]"
  />

  <Footer
    title="Impressum"
    company="Fukugi Übersetzungsservice"
    address="München, Deutschland"
    phone="+49 (auf Anfrage)"
    email="contact@fukugi-ln.com"
  />
</template>
