<template>
  <div class="mt-12">
      <h2 class="text-xl font-bold mb-6">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(product, i) in relatedProducts"
          :key="i"
          class="bg-white rounded-lg shadow p-4 flex flex-col"
        >
          <img
            :src="product.image"
            alt=""
            class="w-full h-40 object-contain rounded bg-[#F2F2F2]"
          />
          <h3 class="mt-4 font-semibold">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ product.desc }}</p>
          <div class="mt-auto flex justify-between items-center">
            <button
              @click="() => addToCart(product)"
              class="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 mt-3 rounded text-sm cursor-pointer"
            >
              Add to Cart
            </button>
            <span class="text-teal-600 font-bold">{{ product.price }} LE</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const addToCart = cartStore.addToCart

// المنتجات المتعلقة
const relatedProducts = ref([
  {
    name: 'Pink Bag',
    desc: 'Elegant pink bag for everyday use',
    price: 200,
    image: '/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png',
  },
  {
    name: 'Baby Orange Bag',
    desc: 'Trendy orange mini bag',
    price: 120,
    image: '/images/8c35632de82be8decbbd19dea481edd439f2cd84.png',
  },
  {
    name: 'Kashmir Bag',
    desc: 'Premium Kashmir style handbag',
    price: 500,
    image: '/images/613d571225293a510ce25fb18819dfc5779169a6.png',
  },
  {
    name: 'Handmade Bag',
    desc: 'Unique handmade artisan bag',
    price: 480,
    image: '/images/8479e0930bc4723326670857d692196f28d7729c.png',
  },
  {
    name: 'Black Bag',
    desc: 'Classic black leather handbag',
    price: 260,
    image: '/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png',
  },
])
</script>
