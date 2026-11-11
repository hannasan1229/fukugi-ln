<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero
    title="語学サービス・技術データ解析｜福田真帆（Fukugi）"
    subtitle="日独・日英対応｜技術・研究・国際プロジェクト向け"
    cta="お問い合わせ"
  />

  <About
    profileTitle="福田真帆"
    :tabLabels="{
      profile: 'プロフィール',
      service: '翻訳 & 通訳',
      technical: 'データ解析',
    }"
    :profileText="[
      'ミュンヘンを拠点に、日本語・ドイツ語および日本語・英語の通訳サービスを提供しています。',
      '化学工学を専門とし、製造業を中心に約10年にわたる技術・ビジネス分野での実務経験があります。',
      '単なる言葉の翻訳にとどまらず、文化的背景や意図、ニュアンスを正確かつ分かりやすく伝えることを大切にしています。',
    ]"
    careerTitle="経歴"
    :careerTimeline="[
      {
        date: '2022年10月 – 2026年9月',
        company: 'BMW Group',
        text: 'リチウムイオン電池（LIB）、電解液組成、電気化学的なセル特性評価、ドライコーティング',
      },
      {
        date: '2021年2月 – 2022年9月',
        company: 'Fraunhofer IKTS',
        text: 'リチウムイオン電池のセルコンセプト、劣化解析、セル設計の最適化',
      },
      {
        date: '2018年11月 – 2021年1月',
        company: 'Maxell Europe Ltd.',
        text: 'リチウムイオン電池・全固体電池の技術サポート、顧客ニーズに応じた電池設計、実現可能性調査',
      },
      {
        date: '2016年12月 – 2018年10月',
        company: 'Maxell Ltd.（日本）',
        text: '二酸化マンガンリチウムコイン電池の設計・製造プロセス開発',
      },
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
    technicalTitle="技術サポート"
    :technicalServices="[
      {
        key: 'battery',
        title: 'バッテリー解析',
        text: 'サイクル寿命、SoH、dQ/dV解析',
        exampleImage: '/images/plots/battery-curve.svg',
      },
      {
        key: 'powder',
        title: '材料評価',
        text: '引張強度・破断解析',
        exampleImage: '/images/plots/material-curve.svg',
      },
      {
        key: 'chemistry',
        title: '表面・濡れ性',
        text: '接触角・界面評価',
        exampleImage: '/images/plots/peak-analysis.svg',
      },
    ]"
    demoButtonText="デモを見る"
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
    company="Fukugi | 語学サービス・技術データ解析"
    address="ドイツ・ミュンヘン"
    phone="+49（お問い合わせ後にご案内） "
    email="contact@fukugi-ln.com"
    copyright="© 2026 Maho Fukuda. Alle Rechte vorbehalten."
  />
</template>
