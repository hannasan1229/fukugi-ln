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
        { label: '半日', price: '300 €～' },
        { label: '1日', price: '600 €～' },
        { label: 'リモート対応', price: '500 €～ / 日' },
        {
          label: '展示会・会議の報告書作成',
          price: '初回無料、2回目以降 50 € / 件',
        },
      ],
      private: {
        text: '個人のお客様向けの通訳サービスです。',
        price: '最低料金：80 €',
        notes: [
          '最初の1時間は、片道1時間以内の移動時間を含みます。',
          '以降30分ごとに30 €',
        ],
      },
    }"
    :translation="{
      title: '専門翻訳',
      description: '技術・ビジネス分野における高精度な翻訳。',
      standard: {
        title: '案件別専門翻訳',
        prices: [
          { label: '基本料金', price: '200 €～' },
          { label: '基本料金に含まれる作業時間', price: '最大3時間' },
          { label: '追加作業', price: '60 € / 時間～' },
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
    :technical="{
      title: '技術データ解析',
      description:
        '研究・産業分野向けの技術データ解析、可視化および評価サポート。',

      cards: [
        {
          type: 'Battery',
          title: 'バッテリー解析',
          text: 'dQ/dV解析、SoH評価、サイクルデータ解析、劣化分析およびグラフ作成。',
          price: '基本料金 250 €～',
          note: '標準的なデータ処理を約4時間まで含みます。',
        },

        {
          type: 'Scientific',
          title: 'データ可視化',
          text: '実験データのグラフ化、レポート作成および構造化支援。',
          price: '基本料金 250 €～',
          note: '標準的なデータ処理を約4時間まで含みます。',
        },

        {
          type: 'Custom',
          title: '個別解析サポート',
          text: '個別要件に応じた解析、自動化および簡易解析ツール作成。',
          price: '応相談',
        },
      ],
    }"
  />

  <!-- Footer -->
  <Footer
    title="運営者情報"
    company="Fukugi | 語学サービス・技術データ解析"
    address="ドイツ・ミュンヘン"
    phone="+49 お問い合わせ後にご案内"
    email="contact@fukugi-ln.com"
  />
</template>
