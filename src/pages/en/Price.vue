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
        { label: 'Half day', price: 'from €380' },
        { label: 'Full day', price: 'from €650' },
        { label: 'Remote assignment', price: 'from €550 / day' },
      ],
      private: {
        text: 'Individual assignments in a private context.',
        price: 'from €60 (minimum charge)',
        notes: ['Minimum charge applies', 'Travel time > 1h prorated'],
      },
    }"
    :translation="{
      title: 'Specialised Translation',
      description:
        'Accurate translations of technical and business-related content.',
      standard: {
        title: 'Project-based translation',
        prices: [
          { label: 'Unit price', price: 'project-based' },
          { label: 'Price range', price: 'on request' },
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
