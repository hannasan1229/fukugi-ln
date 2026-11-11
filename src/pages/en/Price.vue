<script setup>
import Price from "@/pages/Price.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Price
    pageTitle="Pricing"
    pageIntro="Price ranges for professional language services in a business context. Each project is calculated individually – transparent, fair, and binding."
    :interpreting="{
      title: 'Interpreting',
      description:
        'Professional interpreting for meetings, appointments, and business events in specialised contexts.',
      business: [
        { label: 'Half day', price: 'from €300' },
        { label: 'Full day', price: 'from €600' },
        { label: 'Remote assignment', price: 'from €500 / day' },
        {
          label: 'Trade Fair & Meeting Report',
          price: 'First report free, then €50 / report',
        },
      ],
      private: {
        text: 'Individual interpreting assignments in a private context.',
        price: 'Minimum charge: €80',
        notes: [
          'First hour includes travel time of up to 1 hour (one way)',
          'Each additional 30 minutes: €30',
        ],
      },
    }"
    :translation="{
      title: 'Specialised Translation',
      description:
        'Accurate translations of technical and business-related content.',
      standard: {
        title: 'Project-based Translation',
        prices: [
          { label: 'Basic package', price: 'from €200' },
          { label: 'Included processing time', price: 'up to 3 hours' },
          { label: 'Additional work', price: 'from €60 / hour' },
        ],
      },
      extras: [
        {
          title: 'Document structuring',
          text: 'Linguistic refinement and structured layout.',
          price: 'on request',
        },
        {
          title: 'Media & market research',
          text: 'Target-market and contextual research for content accuracy.',
          price: 'on request',
        },
      ],
    }"
    :coaching="{
      title: 'Coaching',
      description:
        'Preparation for professional appearances and specialised communication.',
      cards: [
        {
          type: 'Business',
          text: 'Coaching for presentations and professional discussions.',
          price: 'from €80 / hour',
        },
        {
          type: 'Private',
          text: 'Individual preparation for speeches and conversations.',
          price: 'from €60 / hour',
        },
      ],
    }"
    coachingNote="Coaching services are offered exclusively in a one-to-one format."
    conditionsTitle="General conditions"
    :conditions="[
      'Minimum charge according to the agreed scope of services',
      'Travel and preparation time are considered working time',
      'Agreed services are to be paid in full',
      'Offers are project-based and time-limited',
    ]"
    :technical="{
      title: 'Technical Data Analysis',
      description:
        'Analysis, visualization, and evaluation of technical measurement data for research and industry.',

      cards: [
        {
          type: 'Battery',
          title: 'Battery Analysis',
          text: 'dQ/dV, SoH, cycle data, ageing analysis, and technical plotting.',
          price: 'Basic package from €250 ',
          note: 'Includes up to approximately 4 hours of standard processing.',
        },

        {
          type: 'Scientific',
          title: 'Data Visualization',
          text: 'Charts, reports, and structured preparation of experimental data.',
          price: 'basic fee from €250 ',
          note: 'Includes up to approximately 4 hours of standard processing.',
        },

        {
          type: 'Custom',
          title: 'Custom Evaluation',
          text: 'Individual analysis workflows, automation, and lightweight analysis tools.',
          price: 'on request',
        },
      ],
    }"
  />
  <!-- Footer -->
  <Footer
    title="Legal Notice"
    company="Fukugi | Language Services & Technical Data Analysis"
    address="Munich, Germany"
    phone="+49 (available upon request) "
    email="contact@fukugi-ln.com"
  />
</template>
