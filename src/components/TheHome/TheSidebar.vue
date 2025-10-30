<template>
  <section class="flex flex-col md:flex-row gap-4 pt-10 px-4 md:px-8">
    <div class="w-full md:w-1/4 bg-white shadow rounded-lg p-4">
      <ul class="space-y-3">
        <li v-for="item in categories" :key="item.name"
          class="flex items-center gap-2 cursor-pointer hover:text-teal-500 transition">
          <span class="text-xl">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <div class="w-full md:w-3/4">
      <Swiper :modules="[Navigation, Pagination, Autoplay]" navigation pagination autoplay loop
        class="rounded-lg overflow-hidden">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#2BD9C7] to-[#00B29D] p-6 md:p-10">
            <!-- Text -->
            <div class="flex-1 text-white space-y-10 ml-10">
              <span class="bg-[#008D7C] text-white px-3 py-1 rounded">FASHION END OF</span>
              <h1 class="text-4xl md:text-5xl font-bold">SEASON SALE</h1>
              <h2 class="text-2xl md:text-3xl font-semibold">{{ slide.title }}</h2>
              <p>{{ slide.subtitle }}</p>
            </div>

            <!-- Image -->
            <div class="flex-1 flex flex-col items-center mt-6 md:mt-0">
              <img :src="slide.image" alt="Slide" class="w-full h-[400px] object-contain" />
              <button class="bg-white px-5 py-2 rounded-full mt-4 w-40 cursor-pointer uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const categories = [
  { name: 'Home & Furniture', icon: '🏠' },
  { name: 'Supermarket', icon: '🛒' },
  { name: 'Phones & Tablets', icon: '📱' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Computing', icon: '💻' },
  { name: 'Bags', icon: '👜' },
  { name: 'Health & Medicine', icon: '💊' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Baby Products', icon: '🍼' },
  { name: 'Accessories', icon: '⌚' },
  { name: 'Animals Feeds', icon: '🐾' },
  { name: 'Other Categories', icon: '➕' },
]

const slides = [
  { title: 'Winter Fashion', subtitle: 'Quality You Can Feel', image: '/images/17054f55cad6f3b11d5ce7cbdfac6d2aab21297b.png' },
  { title: 'Summer Sale', subtitle: 'Cool Deals for Hot Days', image: '/images/17054f55cad6f3b11d5ce7cbdfac6d2aab21297b.png' },
  { title: 'Autumn Trends', subtitle: 'Style for Every Season', image: '/images/17054f55cad6f3b11d5ce7cbdfac6d2aab21297b.png' },
]
</script>

<style lang="scss" scoped></style>
