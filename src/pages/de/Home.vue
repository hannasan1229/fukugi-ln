<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Privacy from "@/pages/Privacy.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
 <Hero
  title="Japanisch Dolmetscherin in München<br>Maho Fukuda ｜ Fukugi Translation"
  subtitle="Japanisch–Deutsch & Japanisch–Englisch<br>Für Wirtschaft, Technik & private Anliegen"
  cta="Kontakt aufnehmen"
/>

  <About
    profileTitle="Über mich"
    :profileText="[
  'Mein Name ist Maho Fukuda. Ich bin Dolmetscherin für Japanisch–Deutsch und Japanisch–Englisch mit Sitz in München.',
  'Durch meinen chemischen Hintergrund sowie meine langjährige Erfahrung in der Industrie verfüge ich über ein tiefes Verständnis für technische und geschäftliche Zusammenhänge.',
  'Mein Ziel ist es, nicht nur Worte zu übersetzen, sondern Inhalte klar, präzise und kulturell angemessen zu vermitteln.',
]"
    serviceTitle="Leistungen"
    businessTitle="Business Dolmetschen"
    privateTitle="Private Unterstützung"
    :businessServices="[
      {
        key: 'meeting',
        title: 'Meetings',
        text: 'Professionelles Dolmetschen für Geschäfts- und Technikmeetings.',
      },
      {
        key: 'fair',
        title: 'Messen',
        text: 'Vor-Ort-Dolmetschen für Ausstellungen und Messen.',
      },
      {
        key: 'training',
        title: 'Trainings',
        text: 'Sprachliche Unterstützung für Workshops und Schulungen.',
      },
    ]"
    careerTitle="Werdegang"
    :careerTimeline="[
      {
        date: '10.2022 – heute',
        text: 'Tätigkeit im automobilnahen Technikbereich in Deutschland',
      },
      {
        date: '02.2021 – 09.2022',
        text: 'Arbeit in einer deutschen Forschungseinrichtung',
      },
      {
        date: '11.2018 – 01.2021',
        text: 'Technische Marketing­tätigkeit in einem japanischen Unternehmen in Deutschland',
      },
      {
        date: 'Japan 2016-',
        text: 'Berufserfahrung in der japanischen Industrie',
      },
    ]"
    :privateServices="[
      {
        key: 'office',
        title: 'Behörden',
        text: 'Begleitung bei Behördengängen.',
      },
      {
        key: 'medical',
        title: 'Medizin',
        text: 'Unterstützung bei Arztbesuchen.',
      },
      {
        key: 'shopping',
        title: 'Einkauf',
        text: 'Hilfe bei Verträgen und Anschaffungen.',
      },
    ]"
  />

  <!-- ContactForm -->
  <ContactForm
    title="Kontakt"
    introText="Ich melde mich zeitnah bei Ihnen zurück."
    namePlaceholder="Name"
    emailPlaceholder="E-Mail"
    messagePlaceholder="Ihre Anfrage"
    buttonText="Anfrage senden"
    successMessage="Vielen Dank! Ihre Anfrage wurde gesendet."
  />

  <!-- Footer -->
  <Footer
    title="Impressum"
    company="Fukugi Übersetzungsservice"
    address="München, Deutschland"
    phone="+49 (auf Anfrage)"
    email="contact@fukugi-ln.com"
    copyright="© 2026 Fukugi. All rights reserved."
    imprintLink="/de/impressum"
    privacyLink="/de/privacy"
  />
</template>
