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
        { label: '½ Tag', price: 'ab 300 €' },
        { label: '1 Tag', price: 'ab 600 €' },
        { label: 'Remote-Einsatz', price: 'ab 500 € / Tag' },
        {
          label: 'Messe- und Meetingbericht',
          price: 'Erster Bericht kostenlos, \ndanach 50 € / Bericht',
        },
      ],
      private: {
        text: 'Individuelle Dolmetscheinsätze im privaten Kontext.',
        price: 'Mindestauftragswert: 80 €',
        notes: [
          'Erste Stunde inklusive Anreise bis zu 1 Stunde (einfache Fahrt)',
          'Jede weitere 30 Minuten: 30 €',
        ],
      },
    }"
    :translation="{
      title: 'Fachübersetzung',
      description:
        'Präzise Übersetzungen technischer und wirtschaftlicher Inhalte.',
      standard: {
        title: 'Projektbezogene Fachübersetzung',
        prices: [
          { label: 'Grundpaket', price: 'ab 200 €' },
          {
            label: 'Enthaltener Bearbeitungsumfang',
            price: 'bis zu 3 Stunden',
          },
          { label: 'Zusätzlicher Aufwand', price: 'ab 60 € / Stunde' },
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
    :technical="{
      title: 'Technische Datenanalyse',
      description:
        'Analyse, Visualisierung und Auswertung technischer Messdaten für Forschung und Industrie.',

      cards: [
        {
          type: 'Battery',
          title: 'Batterieanalyse',
          text: 'dQ/dV, SoH, Zyklusdaten, Alterungsanalyse und Diagrammerstellung.',
          price: 'Grundpreis ab 200 €',
          note: 'Enthält bis zu ca. 4 Stunden standardisierte Datenverarbeitung.',
        },

        {
          type: 'Scientific',
          title: 'Datenvisualisierung',
          text: 'Diagramme, Reports und strukturierte Aufbereitung experimenteller Daten.',
          price: 'Grundpreis ab 250 €',
          note: 'Enthält bis zu ca. 4 Stunden standardisierte Datenverarbeitung.',
        },

        {
          type: 'Custom',
          title: 'Individuelle Auswertung',
          text: 'Spezifische Analysen, Automatisierung und kleine Analyse-Tools.',
          price: 'auf Anfrage',
        },
      ],
    }"
  />

  <Footer
    title="Impressum"
    company="Fukugi | Technische Sprachdienstleistungen & Datenanalyse"
    address="München, Deutschland"
    phone="+49 auf Anfrage"
    email="contact@fukugi-ln.com"
  />
</template>
