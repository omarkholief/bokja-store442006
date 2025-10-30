<template>
  <section class="bg-white py-15 px-25 mt-25 mb-25 max-w-7xl mx-auto rounded-xl">
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 md:gap-8 lg:gap-8">
      <div class="text-center md:text-left max-w-lg">
        <h2 class="text-2xl md:text-3xl text-gray-900 mb-4 lg:w-[400px] lg:h-20">
          A Store provides you with everything you want
        </h2>
        <p class="text-gray-600 mb-6 lg:w-[330px]">
          Order any products from our store online, and we deliver to your doorstep at a time that's
          convenient for you.
        </p>
        <button
          class="bg-teal-600 hover:bg-teal-700 text-white cursor-pointer font-medium px-6 py-2 rounded-3xl transition">
          اشتري الآن <i class="ml-2 fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="flex flex-col sm:flex-row md:flex-col lg:flex-col items-center gap-8 lg:gap-1">
        <!-- Item -->
        <div class="flex flex-col lg:flex-row items-center text-center w-56 min-h-[160px]">
          <img src="/images/172aea7deef627acecd1cc758280eb11f81367e7.png" alt="Order" class="w-12 h-12 mb-3" />
          <div class="lg:flex lg:flex-col lg:items-center lg:text-center">
            <h3 class="font-semibold text-gray-900 mb-1">You order receive</h3>
            <p class="text-gray-600 text-sm">Order your favorite items online.</p>
          </div>
        </div>

        <!-- Item -->
        <div class="flex flex-col lg:flex-row items-center text-center w-56 min-h-[160px]">
          <img src="/images/b282e2aa8a623a0a55aac4e7bb5469c01b4d7736.png" alt="Payment" class="w-12 h-12 mb-3" />
          <div class="flex flex-col items-center text-center">
            <h3 class="font-semibold text-gray-900 mb-1">Payment Security</h3>
            <p class="text-gray-600 text-sm">We provide all secure payment methods to you.</p>
          </div>
        </div>

        <!-- Item -->
        <div class="flex flex-col lg:flex-row items-center text-center w-56 min-h-[160px]">
          <img src="/images/833bcd627e1838208e347233cbefda8f6d867367.png" alt="Delivery"
            class="w-12 h-12 mb-3" />
            <div class="flex flex-col items-center text-center">
              <h3 class="font-semibold text-gray-900 mb-1">Order Delivery</h3>
              <p class="text-gray-600 text-sm">We deliver to your doorstep at a time that suits you.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
