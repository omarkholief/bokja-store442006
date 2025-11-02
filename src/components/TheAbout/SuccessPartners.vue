<template>
  <section class="container mx-auto flex flex-col items-center gap-12 mb-36 px-4">
    <h1 class="text-[38px] font-normal text-[#008D7C] text-center">Our Success Partners</h1>

    <div class="flex flex-col gap-6">
      <div class="flex flex-wrap justify-center gap-4" v-for="(row, i) in partners" :key="i">
        <img
          v-for="(logo, j) in row"
          :key="j"
          :src="logo"
          class="w-[160px] h-[70px] border border-gray-300 p-4 rounded-md bg-white object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  [
    "/images/OIP (1).jpeg",
    "/images/visa-inc-png-18.png",
    "/images/OIP.jpeg",
    "/images/1655980011paypal-icon-transparent.png"
  ],
  [
    "/images/stripe1461.jpg",
    "/images/google-pay-logo-transparent-free-png.webp",
    "/images/Discover-logo.png",
    "/images/webmoney_PNG16.png"
  ]
];
</script>
