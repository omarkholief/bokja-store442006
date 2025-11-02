<template>
  <div class="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    <ProductCard
      v-for="(product, i) in products"
      :key="i"
      :product="product"
      :isFavorite="isFavorite(product)"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</template>

<script setup>
import ProductCard from "@/components/TheCategory/ProductCard.vue"

defineProps(["products", "isFavorite"])
defineEmits(["toggle-favorite"])
</script>
