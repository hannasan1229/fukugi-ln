<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero
    title="Japanese Interpreter & Translator in Munich<br>
Maho Fukuda | Fukugi Translation"
    subtitle="Japanese–German & Japanese–English
Business, technical & private support"
    cta="Contact"
  />

  <About
    profileTitle="About Me"
    :profileText="[
  'I am based in Munich and provide Japanese–German and Japanese–English interpreting services.',
  'With a background in chemical engineering, I have nearly ten years of experience in the manufacturing industry, particularly in technical and business environments.',
  'My goal is not only to translate words, but also to convey cultural context, nuances, and intentions clearly and accurately.',
]"
    careerTitle="Career"
    :careerTimeline="[
      {
        date: '10.2022 – Present',
        text: 'Technical and interpreting work in the automotive-related sector in Germany',
      },
      {
        date: '02.2021 – 09.2022',
        text: 'Research-related work at a German research institute',
      },
      {
        date: '11.2018 – 01.2021',
        text: 'Technical marketing at a Japanese company in Germany',
      },
      {
        date: 'Japan 2016-',
        text: 'Industry experience in the Japanese manufacturing sector',
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
    company="Fukugi Translation Services"
    address="Munich, Germany"
    phone="+49 (available upon request) "
    email="contact@fukugi-ln.com"
  />
</template>
