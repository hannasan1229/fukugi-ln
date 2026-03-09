<script setup>
import Price from "@/pages/Price.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Price
    pageTitle="Preise"
    pageIntro="Preisrahmen für professionelle Sprachdienstleistungen im Business-Kontext. Jedes Projekt wird individuell kalkuliert.
Transparent, fair und verbindlich.
"
    :interpreting="{
      title: 'Dolmetschen',
      description:
        'Professionelle Begleitung bei Meetings, Terminen und Veranstaltungen im Fach- und Business-Kontext.',
      business: [
        { label: '½ Tag', price: 'ab 380 €' },
        { label: '1 Tag', price: 'ab 650 €' },
        { label: 'Remote-Einsatz', price: 'ab 550 € / Tag' },
      ],
      private: {
        text: 'Individuelle Einsätze im privaten Kontext.',
        price: 'ab 60 € (Mindestaufwand)',
        notes: ['Mindestaufwand berücksichtigt', 'Anreise > 1h anteilig'],
      },
    }"
    :translation="{
      title: 'Fachübersetzung',
      description:
        'Präzise Übersetzungen technischer und wirtschaftlicher Inhalte.',
      standard: {
        title: 'Projektübersetzungen',
        prices: [
          { label: 'Einheitspreis', price: 'projektbasiert' },
          { label: 'Preisrahmen', price: 'auf Anfrage' },
        ],
      },
      extras: [
        {
          title: 'Dokumentgestaltung',
          text: 'Sprachliche Optimierung und strukturierte Aufbereitung.',
          price: 'auf Anfrage',
        },
        {
          title: 'Medien- & Markt-Recherche',
          text: 'Zielmarkt- und Kontextrecherche zur inhaltlichen Absicherung.',
          price: 'auf Anfrage',
        },
      ],
    }"
    :coaching="{
      title: 'Coaching',
      description:
        'Vorbereitung für professionelle Auftritte und Fachkommunikation.',
      cards: [
        {
          type: 'Business',
          text: 'Coaching für Präsentationen und Fachgespräche.',
          price: 'ab 80 € / Stunde',
        },
        {
          type: 'Privat',
          text: 'Individuelle Vorbereitung für Reden und Gespräche.',
          price: 'ab 60 € / Stunde',
        },
      ],
    }"
    coachingNote="Coaching-Leistungen werden ausschließlich im 1:1-Format angeboten."
    conditionsTitle="Allgemeine Konditionen"
    :conditions="[
      'Angebote sind projektbezogen und zeitlich befristet',
      'Vereinbarte Leistungen sind vollständig zu vergüten',
      'Notwendige Spesen (z. B. Reise- und Übernachtungskosten) werden zusätzlich berechnet, sofern nicht anders vereinbart',
      'Vorbereitungsleistungen werden nur dann berechnet, wenn sie vorab im Angebot ausgewiesen sind',
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
