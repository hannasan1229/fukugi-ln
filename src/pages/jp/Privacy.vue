<script setup>
import Privacy from "@/pages/Privacy.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Privacy
    imprintTitle="運営者情報"
    :imprintText="[
      'Fukugi 翻訳・通訳サービス',
      '代表者：福田 真帆',
      'ドイツ・ミュンヘン',
      'メール：contact@fukugi-ln.com'
    ]"

    privacyTitle="プライバシーポリシー"
    :privacySections="[
      {
        heading: '基本方針',
        text: '本ウェブサイトは、提供サービスに関する情報を目的として運営されています。'
      },
      {
        heading: '個人情報の取り扱い',
        text: 'お問い合わせの際にご提供いただいた個人情報は、ご連絡への対応のみに使用されます。'
      },
      {
        heading: '第三者提供について',
        text: '取得した個人情報を第三者に提供することはありません。'
      }
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
