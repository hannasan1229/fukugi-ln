<script setup>
import Price from "@/pages/Price.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Price
    pageTitle="料金"
    pageIntro="ビジネス分野における専門的な言語サービスの料金目安です。すべての案件は内容に応じて個別に算出され、明確かつ公正にご提示します。"
    :interpreting="{
      title: '通訳',
      description:
        '専門分野およびビジネス環境における会議・商談・各種イベントへの通訳対応。',
      business: [
        { label: '半日', price: '380€〜' },
        { label: '1日', price: '650€〜' },
        { label: 'リモート対応', price: '550€〜／日' },
      ],
      private: {
        text: '個人案件・プライベート対応。',
        price: '60€〜（最低料金）',
        notes: [
          '最低限の作業時間を考慮',
          '移動時間（1時間超は作業時間に該当）',
        ],
      },
    }"
    :translation="{
      title: '専門翻訳',
      description: '技術・ビジネス分野における高精度な翻訳。',
      standard: {
        title: 'プロジェクト翻訳',
        prices: [
          { label: '単価', price: '案件ベース' },
          { label: '料金', price: '要相談' },
        ],
      },
      extras: [
        {
          title: 'ドキュメント整備',
          text: '文章構成および表現の最適化。',
          price: '要相談',
        },
        {
          title: 'メディア・市場調査',
          text: '対象市場および背景情報の調査。',
          price: '要相談',
        },
      ],
    }"
    :coaching="{
      title: 'コーチング',
      description: '専門的な発表・対外コミュニケーションのための準備。',
      cards: [
        {
          type: 'Business',
          text: 'プレゼンテーションおよび専門的な対話のためのコーチング。',
          price: '80€〜／時間',
        },
        {
          type: 'Private',
          text: 'スピーチや面談に向けた個別準備。',
          price: '60€〜／時間',
        },
      ],
    }"
    coachingNote="コーチングは1対1の個別形式のみで提供しております。"
    conditionsTitle="ご利用条件"
    :conditions="[
      '最低料金は合意された業務内容に基づきます',
      '移動時間および準備時間は原則、業務時間に含まれます',
      '合意された業務内容は全額お支払いいただきます',
      'お見積りは案件ごとに作成され、有効期限があります',
    ]"
  />

  <!-- Footer -->
  <Footer
    title="運営者情報"
    company="フクギ 通訳・翻訳サービス"
    address="ドイツ・ミュンヘン"
    phone="+49 お問い合わせ後にご案内"
    email="contact@fukugi-ln.com"
  />
</template>
