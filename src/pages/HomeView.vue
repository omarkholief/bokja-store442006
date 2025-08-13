<!-- src/components/HeroSection.vue -->
<template>
  <section class="flex flex-col md:flex-row gap-4 pt-10 px-4 md:px-8">
    <!-- Sidebar -->
    <div class="w-full md:w-1/4 bg-white shadow rounded-lg p-4">
      <ul class="space-y-3">
        <li v-for="item in categories" :key="item.name"
          class="flex items-center gap-2 cursor-pointer hover:text-teal-500 transition">
          <span class="text-xl">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <!-- Swiper Slider -->
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
              <img src="/public/images/17054f55cad6f3b11d5ce7cbdfac6d2aab21297b.png" alt="Slide"
                class="w-full h-[400px] object-contain" />
              <button class="bg-white px-5 py-2 rounded-full mt-4 w-40 cursor-pointer uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- New Arrivals -->
  <section class="max-w-7xl pt-20 lg:pt-40 mx-auto px-4 py-8">
    <!-- Title -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl mb-6">New Arrivals</h2>
      <router-link to="/category-page"><a href="#" class="text-teal-500 hover:underline">See All</a></router-link>
    </div>

    <!-- Grid -->
    <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="(product, index) in products" :key="index" @click="$router.push(`/category/${product.category}`)"
        class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">
        <!-- Heart Icon -->
        <button @click="toggleFavorite(product)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer absolute right-5" fill="currentColor"
            :class="isFavorite(product) ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
          </svg>
        </button>


        <img :src="product.image" :alt="product.name" class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />
        <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

        <div class="flex justify-between items-center w-full">
          <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
            @click="addToCart(product)">
            Add to Cart
          </button>
          <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
        </div>
      </div>
    </div>

    <!-- Swiper for small screens -->
    <div class="sm:hidden">
      <Swiper :modules="[Navigation, Pagination, Autoplay]" navigation pagination autoplay loop
        class="rounded-lg overflow-hidden">
        <SwiperSlide v-for="(product, index) in products" :key="index">
          <div class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">
            <!-- Heart Icon -->
            <button @click="toggleFavorite(product)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer absolute right-5" fill="currentColor"
                :class="isFavorite(product) ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
              </svg>
            </button>


            <img :src="product.image" :alt="product.name"
              class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />
            <h3 class="font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

            <div class="flex justify-between items-center w-full">
              <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition">
                Add to Cart
              </button>
              <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- Store Info -->
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
          <img src="/public/images/172aea7deef627acecd1cc758280eb11f81367e7.png" alt="Order" class="w-12 h-12 mb-3" />
          <div class="lg:flex lg:flex-col lg:items-center lg:text-center">
            <h3 class="font-semibold text-gray-900 mb-1">You order receive</h3>
            <p class="text-gray-600 text-sm">Order your favorite items online.</p>
          </div>
        </div>

        <!-- Item -->
        <div class="flex flex-col lg:flex-row items-center text-center w-56 min-h-[160px]">
          <img src="/public/images/b282e2aa8a623a0a55aac4e7bb5469c01b4d7736.png" alt="Payment" class="w-12 h-12 mb-3" />
          <div class="flex flex-col items-center text-center">
            <h3 class="font-semibold text-gray-900 mb-1">Payment Security</h3>
            <p class="text-gray-600 text-sm">We provide all secure payment methods to you.</p>
          </div>
        </div>

        <!-- Item -->
        <div class="flex flex-col lg:flex-row items-center text-center w-56 min-h-[160px]">
          <img src="/public/images/833bcd627e1838208e347233cbefda8f6d867367.png" alt="Delivery"
            class="w-12 h-12 mb-3" />
            <div class="flex flex-col items-center text-center">
              <h3 class="font-semibold text-gray-900 mb-1">Order Delivery</h3>
              <p class="text-gray-600 text-sm">We deliver to your doorstep at a time that suits you.</p>
            </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Featured Products -->
  <section class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl mb-6">Featured Products</h2>
      <router-link to="/category-page"><a href="#" class="text-teal-500 hover:underline">See All</a></router-link>
    </div>

    <!-- Grid -->
    <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="(product, index) in featuredProducts" :key="index"
        @click="$router.push(`/category/${product.categoryId}`)"
        class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">
        <!-- Heart Icon -->
        <button @click="toggleFavorite(product)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer absolute right-5" fill="currentColor"
            :class="isFavorite(product) ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
          </svg>
        </button>


        <img :src="product.image" :alt="product.name" class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />
        <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

        <div class="flex justify-between items-center w-full">
          <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
            @click="addToCart(product)">
            Add to Cart
          </button>
          <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
        </div>
      </div>
    </div>

    <!-- Swiper for small screens -->
    <div class="sm:hidden">
      <Swiper :modules="[Navigation, Pagination, Autoplay]" navigation pagination autoplay loop
        class="rounded-lg overflow-hidden">
        <SwiperSlide v-for="(product, index) in featuredProducts" :key="index">
          <div class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">
            <!-- Heart Icon -->
            <button @click="toggleFavorite(product)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer absolute right-5" fill="currentColor"
                :class="isFavorite(product) ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
              </svg>
            </button>


            <img :src="product.image" :alt="product.name"
              class="w-full h-40 object-contain mb-4 bg-[#F2F2F2] rounded-lg" />
            <h3 class="font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ product.title }}</p>

            <div class="flex justify-between items-center w-full">
              <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition"
                @click="addToCart(product)">
                Add to Cart
              </button>
              <p class="text-[#008D7C] mb-4">{{ product.price }} E£</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

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
  { title: 'Winter Fashion', subtitle: 'Quality You Can Feel', image: '/images/slide1.png' },
  { title: 'Summer Sale', subtitle: 'Cool Deals for Hot Days', image: '/images/slide2.png' },
  { title: 'Autumn Trends', subtitle: 'Style for Every Season', image: '/images/slide3.png' },
]

const products = [
  {
    name: 'Olive Oil',
    category: 'Food',
    price: 240,
    image: '/public/images/64f92ff4e093c06b445b83810fea8b9f9167b312 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Touch Watch',
    category: 'Electronics',
    price: 200,
    image: '/public/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Green Bag',
    category: 'bags',
    price: 500,
    image: '/public/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Orange',
    category: 'Food',
    price: 20,
    image: '/public/images/e7ffe1c3e626545a63a24f0f4a03486f8c920777 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Headphone',
    category: 'Electronics',
    price: 260,
    image: '/public/images/b5da2dc712b83bfd274d000aaa0b3f5b636128ad (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
]

const featuredProducts = [
  {
    name: 'Black Bag',
    category: 'bags',
    price: 260,
    image: '/public/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Kashmir Bag',
    category: 'bags',
    price: 500,
    image: '/public/images/613d571225293a510ce25fb18819dfc5779169a6.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Olive Oil',
    category: 'Food',
    price: 260,
    image: '/public/images/64f92ff4e093c06b445b83810fea8b9f9167b312 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Pink Bag',
    category: 'bags',
    price: 200,
    image: '/public/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Handmade Bag',
    category: 'bags',
    price: 480,
    image: '/public/images/8479e0930bc4723326670857d692196f28d7729c.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Green Bag',
    category: 'bags',
    price: 500,
    image: '/public/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Baby Orange Bag',
    category: 'bags',
    price: 120,
    image: '/public/images/8c35632de82be8decbbd19dea481edd439f2cd84.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Touch Watch',
    category: 'watches',
    price: 200,
    image: '/public/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Yellow Bag',
    category: 'bags',
    price: 500,
    image: '/public/images/d94561450d454c34a0149d737ef1ad6e2e4c8974.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Orange Bag',
    category: 'bags',
    price: 450,
    image: '/public/images/658e32fd077e34938624166ef07c67f2781bc2e5.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
]

// مفضلة

const favorites = ref([])

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem("favorites")) || [];
})

const isFavorite = (product) => {
  return favorites.value.some(p => p.name === product.name);
}

const toggleFavorite = (product) => {
  if (isFavorite(product)) {
    favorites.value = favorites.value.filter(p => p.name !== product.name)
    alert("تم حذف المنتج من المفضلة ❌")
  } else {
    favorites.value.push(product)
    alert("تمت إضافة المنتج إلى المفضلة ❤️")
  }
  localStorage.setItem("favorites", JSON.stringify(favorites.value))
}

// stores/cart.js
const cartStore = useCartStore()
const router = useRouter()

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push('/checkout')
}
</script>
