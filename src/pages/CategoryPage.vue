<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <!-- العنوان -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold capitalize">
        {{ categoryName }} Products
      </h1>
      <router-link to="/home" class="text-teal-500 hover:underline">
        الرجوع للرئيسية
      </router-link>
    </div>

    <!-- Swiper للشاشات الصغيرة -->
    <div class="block md:hidden relative">
      <swiper
        :slides-per-view="1.2"
        :space-between="15"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :modules="[Navigation]"
        class="pb-10"
      >
        <swiper-slide v-for="(product, index) in filteredProducts" :key="index">
          <div
            class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative"
          >
            <!-- أيقونة القلب -->
            <button
              @click="toggleFavorite(product)"
              class="absolute top-3 right-3 text-xl cursor-pointer transition"
              :class="isFavorite(product) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
            >
              <i class="fa-solid fa-heart"></i>
            </button>

            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg"
            />
            <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

            <div class="flex justify-between items-center w-full">
              <button
                class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
              >
                Add to Cart
              </button>
              <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- أزرار التنقل -->
      <div
        class="swiper-button-prev absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        class="swiper-button-next absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>

    <!-- Grid للشاشات المتوسطة فما فوق -->
    <div
      v-if="filteredProducts.length"
      class="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative"
      >
        <button
          @click="toggleFavorite(product)"
          class="absolute top-3 right-3 text-xl cursor-pointer transition"
          :class="isFavorite(product) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
        >
          <i class="fa-solid fa-heart"></i>
        </button>

        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg"
        />
        <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

        <div class="flex justify-between items-center w-full">
          <button
            class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
          >
            Add to Cart
          </button>
          <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
        </div>
      </div>
    </div>

    <!-- في حالة عدم وجود منتجات -->
    <div v-else class="text-center text-gray-500 py-20">
      لا توجد منتجات في هذه الفئة
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { products, featuredProducts } from '../data/products'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const route = useRoute()
const categoryName = route.params.category.toLowerCase()
const allProducts = [...products, ...featuredProducts]

const filteredProducts = allProducts.filter(
  p => p.category.toLowerCase() === categoryName
)

const favorites = ref([])

function toggleFavorite(product) {
  const index = favorites.value.findIndex(p => p.name === product.name)
  if (index === -1) {
    favorites.value.push(product)
  } else {
    favorites.value.splice(index, 1)
  }
}

function isFavorite(product) {
  return favorites.value.some(p => p.name === product.name)
}
</script>
