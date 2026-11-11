<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Privacy from "@/pages/Privacy.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero
    title="Technische Sprachdienstleistungen & Datenanalyse<br>Maho Fukuda ｜ Fukugi"
    subtitle="Japanisch–Deutsch & Japanisch–Englisch<br>Für Technik, Industrie und wissenschaftliche Projekte"
    cta="Kontakt aufnehmen"
  />
  <About
    :tabLabels="{
      profile: 'Profil',
      service: 'Sprache',
      technical: 'Data Analyse',
    }"
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
        date: '10.2022 – 09.2026',
        company: 'BMW Group',
        text: 'Lithium-Ionen-Batterien (LIB), Elektrolytzusammensetzung, elektrochemische Zellcharakterisierung und Trockenbeschichtung',
      },
      {
        date: '02.2021 – 09.2022',
        company: 'Fraunhofer IKTS',
        text: 'Zellkonzepte für Lithium-Ionen-Batterien, Post-Mortem-Analysen und Zelldesign-Optimierung',
      },
      {
        date: '11.2018 – 01.2021',
        company: 'Maxell Europe Ltd.',
        text: 'Technischer Support für Lithium-Ionen- und Festkörperbatterien, kundenspezifische Batteriekonzepte und Machbarkeitsstudien',
      },
      {
        date: '12.2016 – 10.2018',
        company: 'Maxell Ltd., Japan',
        text: 'Design und Prozessentwicklung von Mangan-Lithium-Knopfzellen',
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
    technicalTitle="Analyse & Engineering Support"
    technicalIntro="Ich unterstütze die Interpretation komplexer Daten und fundierte Entscheidungen."
    :technicalServices="[
      {
        key: 'battery',
        title: 'Batterieanalyse',
        text: 'Zyklusverhalten, SoH und Degradationsanalyse',
      },
      {
        key: 'powder',
        title: 'Materialbewertung & Datenanalyse',
        text: 'Statistische Auswertung zur Identifikation von Einflussfaktoren',
      },
      {
        key: 'chemistry',
        title: 'Physikalische & Prozessanalyse',
        text: 'Visualisierung und Interpretation von Material- und Prozessdaten (z. B. Scherkräfte, thermische Verteilung)',
      },
    ]"
    demoButtonText="Demo ansehen"
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
    company="Fukugi | Technische Sprachdienstleistungen & Datenanalyse"
    address="München, Deutschland"
    phone="+49 (auf Anfrage)"
    email="contact@fukugi-ln.com"
    copyright="© 2026 Fukugi. All rights reserved."
    imprintLink="/de/impressum"
    privacyLink="/de/privacy"
  />
</template>
