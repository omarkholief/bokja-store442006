<template>
  <section class="max-w-7xl mx-auto px-4 py-8">

    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold capitalize">{{ categoryName }} Products</h1>
      <router-link to="/home" class="text-teal-500 hover:underline">الرجوع للرئيسية</router-link>
    </div>

    <ProductsSwiper
      :products="filteredProducts"
      :isFavorite="isFavorite"
      @toggle-favorite="toggleFavorite"
    />

    <ProductsGrid
      :products="filteredProducts"
      :isFavorite="isFavorite"
      @toggle-favorite="toggleFavorite"
    />

    <div v-if="!filteredProducts.length" class="text-center text-gray-500 py-20">
      لا توجد منتجات في هذه الفئة
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { products, featuredProducts } from "@/data/products"

import ProductsSwiper from "@/components/TheCategory/ProductsSwiper.vue"
import ProductsGrid from "@/components/TheCategory/ProductsGrid.vue"

const route = useRoute()
const categoryName = route.params.category.toLowerCase()
const allProducts = [...products, ...featuredProducts]

const filteredProducts = allProducts.filter(p => p.category.toLowerCase() === categoryName)

const favorites = ref([])

function toggleFavorite(product) {
  const index = favorites.value.findIndex(p => p.name === product.name)
  index === -1 ? favorites.value.push(product) : favorites.value.splice(index, 1)
}

function isFavorite(product) {
  return favorites.value.some(p => p.name === product.name)
}
</script>
