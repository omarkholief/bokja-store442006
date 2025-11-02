<template>
  <div class="bg-white p-10 rounded-xl space-y-4">
    <div
      v-for="(item, index) in faqs"
      :key="index"
      @click="toggle(index)"
      class="border p-4 rounded-lg shadow cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <h3 class="font-semibold">{{ item.question }}</h3>
        <span class="text-2xl font-bold">
          {{ activeIndex === index ? '-' : '+' }}
        </span>
      </div>

      <p
        v-if="activeIndex === index"
        class="mt-3 text-gray-600"
      >
        {{ item.answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqs: [
        { question: "How bokja store works", answer: "We connect you with top suppliers worldwide..." },
        { question: "How to Pay for Your Order", answer: "We accept Visa, PayPal, and cash on delivery..." },
        { question: "How to Track Your Order", answer: "After placing an order you get a tracking code..." },
      ]
    };
  },

  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>
