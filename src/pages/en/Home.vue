<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero
    title="Language Services & Technical Data Analysis<br>Maho Fukuda ｜ Fukugi"
    subtitle="Japanese–German & Japanese–English<br>For industry, research, and international projects"
    cta="Get in touch"
  />

  <About
    :tabLabels="{
      profile: 'Profile',
      service: 'Translation',
      technical: 'Data Analysis',
    }"
    profileTitle="About Me"
    :profileText="[
      'I am based in Munich and provide Japanese–German and Japanese–English interpreting services.',
      'With a background in chemical engineering, I have nearly ten years of experience in the manufacturing industry, particularly in technical and business environments.',
      'My goal is not only to translate words, but also to convey cultural context, nuances, and intentions clearly and accurately.',
    ]"
    careerTitle="Career"
    :careerTimeline="[
      {
        date: 'Oct 2022 – Sep 2026',
        company: 'BMW Group',
        text: 'Lithium-ion batteries (LIB), electrolyte composition, electrochemical cell characterization and dry coating',
      },
      {
        date: 'Feb 2021 – Sep 2022',
        company: 'Fraunhofer IKTS',
        text: 'Lithium-ion battery cell concepts, post-mortem analysis and cell design optimization',
      },
      {
        date: 'Nov 2018 – Jan 2021',
        company: 'Maxell Europe Ltd.',
        text: 'Technical support for lithium-ion and solid-state batteries, customized battery concepts and feasibility studies',
      },
      {
        date: 'Dec 2016 – Oct 2018',
        company: 'Maxell Ltd., Japan',
        text: 'Design and process development of manganese-lithium coin cells',
      },
    ]"
    serviceTitle="Services"
    businessTitle="Business Interpreting"
    privateTitle="Private Support"
    :businessServices="[
      {
        key: 'meeting',
        title: 'Meetings',
        text: 'Professional interpreting for business and technical meetings.',
      },
      {
        key: 'fair',
        title: 'Trade Fairs',
        text: 'On-site interpreting for exhibitions and trade fairs.',
      },
      {
        key: 'training',
        title: 'Trainings',
        text: 'Language support for workshops and training sessions.',
      },
    ]"
    :privateServices="[
      {
        key: 'office',
        title: 'Authorities',
        text: 'Interpreting assistance for administrative procedures.',
      },
      {
        key: 'medical',
        title: 'Medical Visits',
        text: 'Language support for doctor and hospital appointments.',
      },
      {
        key: 'shopping',
        title: 'Purchases',
        text: 'Assistance with contracts, real estate, or major purchases.',
      },
    ]"
    technicalTitle="Technical Support"
    :technicalServices="[
      {
        key: 'battery',
        text: 'SoH, degradation, dQ/dV',
        image: '/images/battery.jpg',
      },
      {
        key: 'powder',
        text: 'Mechanical & tensile analysis',
        image: '/images/material.jpg',
      },
      {
        key: 'chemistry',
        text: 'Wetting & contact angle',
        image: '/images/wetting.jpg',
      },
    ]"
    demoButtonText="View Demo"
  />

  <!-- ContactForm -->
  <ContactForm
    title="Contact"
    introText="I will get back to you as soon as possible."
    namePlaceholder="Name"
    emailPlaceholder="Email"
    messagePlaceholder="Your message"
    buttonText="Send request"
    successMessage="Thank you! Your request has been sent."
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
