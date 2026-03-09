<script setup>
import Examples from "@/pages/Examples.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Examples
    title="ご依頼の流れ"
    intro="ご依頼から完了までの流れを、分かりやすくご案内します。"
    :steps="[
      {
        title: 'お問い合わせ・お見積り',
        text: 'お問い合わせ後、業務内容・条件・日程を確認し、その内容に基づいて正式なお見積りを提示します。',
      },
      {
        title: 'ご発注',
        text: '書面によるご承諾をもって、正式なご契約・ご依頼となります。',
      },
      {
        title: '準備・手配',
        text: 'ご提供いただいた情報を基に、内容および運営面の準備を行います。',
      },
      {
        title: '実施',
        text: '対面またはオンラインにて、専門的な通訳業務を実施します。',
      },
      {
        title: '事後対応',
        text: '未解決事項の確認および、事前に合意された場合に限り、簡単なまとめを行います。',
      },
      {
        title: 'ご請求',
        text: '合意された業務内容に基づき、明確な請求を行います。',
      },
    ]"
  />

  <Footer
    title="運営者情報"
    company="フクギ 通訳・翻訳サービス"
    address="ドイツ・ミュンヘン"
    phone="+49（お問い合わせ後にご案内）"
    email="contact@fukugi-ln.com"
  />
</template>
