<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero
    title="ミュンヘン日本語通訳・翻訳｜福田真帆（Fukugi Translation）"
    subtitle="ビジネス・技術分野からプライベートまで
日独・日英の専門通訳に対応"
    cta="お問い合わせ"
  />

  <About
    profileTitle="福田真帆"
    :profileText="[
  'ミュンヘンを拠点に、日本語・ドイツ語および日本語・英語の通訳サービスを提供しています。',
  '化学工学を専門とし、製造業を中心に約10年にわたる技術・ビジネス分野での実務経験があります。',
  '単なる言葉の翻訳にとどまらず、文化的背景や意図、ニュアンスを正確かつ分かりやすく伝えることを大切にしています。',
]
"
    careerTitle="経歴"
    :careerTimeline="[
      {
        date: '2022.10 – 現在',
        text: 'ドイツ自動車関連分野にて、技術業務および日英独通訳に従事',
      },
      {
        date: '2021.02 – 2022.09',
        text: 'ドイツの研究機関にて、国際プロジェクト対応',
      },
      {
        date: '2018.09 – 2021.01',
        text: 'ドイツにおける日系企業での技術系マーケティング業務',
      },
      { date: '日本国内 2016-', text: '製造業分野にて、化学・技術関連業務に従事' },
    ]"
    serviceTitle="サービス内容"
    businessTitle="ビジネス通訳"
    privateTitle="プライベートサポート"
    :businessServices="[
      {
        key: 'meeting',
        title: '会議',
        text: '技術・ビジネス会議における専門的な通訳対応。',
      },
      {
        key: 'fair',
        title: '展示会',
        text: '展示会・見本市での現地通訳サポート。',
      },
      {
        key: 'training',
        title: '研修',
        text: '社内研修やワークショップでの言語支援。',
      },
    ]"
    :privateServices="[
      {
        key: 'office',
        title: '行政手続き',
        text: '役所・行政手続きへの通訳同行。',
      },
      {
        key: 'medical',
        title: '医療通訳',
        text: '病院・診察時の通訳サポート。',
      },
      {
        key: 'shopping',
        title: '契約・購入',
        text: '不動産・契約・購入時のサポート。',
      },
    ]"
  />

  <!-- ContactForm -->
  <ContactForm
    title="お問い合わせ"
    introText="内容を確認後、できるだけ早くご連絡いたします。"
    namePlaceholder="お名前"
    emailPlaceholder="メールアドレス"
    messagePlaceholder="お問い合わせ内容"
    buttonText="送信"
    successMessage="お問い合わせありがとうございました。"
  />

  <!-- Footer -->
  <Footer
    title="運営者情報"
    company="フクギ 通訳・翻訳サービス"
    address="ドイツ・ミュンヘン"
    phone="+49（お問い合わせ後にご案内） "
    email="contact@fukugi-ln.com"
    copyright="© 2026 Maho Fukuda. Alle Rechte vorbehalten."
  />
</template>
