<template>
  <div class="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
    <button class="text-teal-500 hover:underline cursor-pointer" @click="$router.push('/home')">
      Continue Shopping
    </button>

    <div class="flex items-center gap-4">
      <span class="text-lg font-semibold">Total Price: {{ cartStore.totalPrice }} LE</span>

      <button
        class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded cursor-pointer"
        @click="$router.push('/checkout-page')"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>
