<script setup>
import { ref, onMounted } from 'vue';

const favorites = ref([]);

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];
});

function removeFromFavorites(product) {
  favorites.value = favorites.value.filter(p => p.name !== product.name);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">المفضلة ❤️</h1>
    <div v-if="favorites.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="product in favorites" :key="product.name" class="bg-white shadow rounded-lg p-4 flex flex-col">
        <img :src="product.image" alt="" class="w-full h-48 object-contain rounded-md" />
        <h2 class="text-lg font-semibold mt-4">{{ product.name }}</h2>
        <p class="text-gray-600 mb-4">{{ product.price }}$</p>
        <button @click="removeFromFavorites(product)"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-auto cursor-pointer">
          حذف من المفضلة
        </button>
      </div>
    </div>
    <p v-else class="text-gray-500">لا يوجد منتجات في المفضلة.</p>
  </section>
</template>
