<template>
  <div class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">

    <button
      @click="$emit('toggle-favorite', product)"
      class="absolute top-3 right-3 text-xl cursor-pointer transition"
      :class="isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
    >
      <i class="fa-solid fa-heart"></i>
    </button>

    <img :src="product.image" :alt="product.name"
      class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />

    <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
    <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

    <div class="flex justify-between items-center w-full">
      <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition">
        Add to Cart
      </button>
      <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  product: Object,
  isFavorite: Boolean
})
defineEmits(["toggle-favorite"])
</script>
