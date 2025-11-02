<template>
  <section class="container mx-auto mb-50 px-4 text-center flex flex-col items-center gap-8">
    <h1 class="text-[38px] font-normal text-[#008D7C] mb-10">
      3 Steps for a successful shopping
    </h1>

    <div class="flex flex-col lg:flex-row justify-center gap-12">
      <div v-for="(step, i) in steps" :key="i" class="flex flex-col items-center gap-4 max-w-xs">
        <img :src="step.img" class="w-[240px] h-[240px]" />
        <p class="text-black text-xl lg:text-2xl leading-8 w-75">{{ step.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    img: "/images/6112b9dec1614082424fcd1197a43ae751675b17.png",
    text: "Start shopping for products from Categories",
  },
  {
    img: "/images/dbf3ceb08f54af44b270074f1baa386b78ee2df8.png",
    text: "Add products to your shopping cart",
  },
  {
    img: "/images/c71a9fd6d81ff0b6da264c9f4f447cd1c3566822.png",
    text: "Choose where the order will be delivered",
  },
];
</script>
