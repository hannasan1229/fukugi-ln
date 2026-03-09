<script setup>
import Examples from "@/pages/Examples.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Examples
    title="Workflow"
    intro="A clear and transparent process so you know exactly what to expect."
    :steps="[
      {
        title: 'Enquiry & Quotation',
        text: 'Following your enquiry, we clarify requirements, framework conditions, and scheduling. Based on this, you will receive a binding quotation.',
      },
      {
        title: 'Confirmation',
        text: 'The assignment becomes binding upon your written confirmation.',
      },
      {
        title: 'Organisation & Preparation',
        text: 'Content-related and organisational preparation based on the information provided.',
      },
      {
        title: 'Execution',
        text: 'Professional interpreting services on-site or online.',
      },
      {
        title: 'Follow-up',
        text: 'Clarification of open points and – if agreed – an optional summary.',
      },
      {
        title: 'Invoicing',
        text: 'Transparent invoicing in accordance with the agreed services.',
      },
    ]"
  />

  <Footer
    title="Legal Notice"
    company="Fukugi Translation Services"
    address="Munich, Germany"
    phone="+49 (available upon request)"
    email="contact@fukugi-ln.com"
  />
</template>
