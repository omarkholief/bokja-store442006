<template>
  <div class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">

    <div v-if="product.discount" class="absolute top-6 left-5 bg-red-500 text-white text-xs px-2 py-1 rounded-3xl">
      Sale
    </div>

    <button @click="$emit('toggleFavorite', product)">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer absolute right-5" fill="currentColor"
        :class="isFavorite ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
      </svg>
    </button>

    <img :src="product.image" :alt="product.name" class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />

    <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
    <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

    <div class="flex justify-between items-center w-full mb-10">
      <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
        @click="$emit('addToCart', product)">
        Add to Cart
      </button>
      <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  isFavorite: Boolean
})
</script>
