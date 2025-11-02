<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <div class="max-w-5xl mx-auto space-y-10">
      <HeaderSection />
      <FAQSection />

      <div class="grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '@/components/TheContactUs/HeaderSection.vue'
import FAQSection from '@/components/TheContactUs/FAQSection.vue'
import ContactInfo from '@/components/TheContactUs/ContactInfo.vue'
import ContactForm from '@/components/TheContactUs/ContactForm.vue'

export default {
  components: { HeaderSection, FAQSection, ContactInfo, ContactForm }
}
</script>
