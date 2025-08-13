<template>
  <div class="bg-[#C7F4ED] py-8 px-4 sm:px-6 lg:px-8 mt-20">
    <div class="max-w-7xl mx-auto">
      <!-- SuperDeals Header -->
      <div>
        <div class="flex gap-10 items-center">
          <h2 class="text-2xl sm:text-3xl text-gray-800">SuperDeals</h2>
          <p class="text-sm sm:text-base text-[#008D7C] mt-1"><i class="fas fa-clock mr-2"></i>Offers Deals For x Day.
            Limited Time</p>
        </div>
        <div class="mt-2 text-center text-3xl text-[#000000]">
          Up to <span class="text-xl sm:text-4xl text-red-600">70%</span> Off
        </div>
        <div class="mt-4 text-sm sm:text-xl text-[#000000] text-center">
          Ends: <span class="font-bold">08 : 05 : 10</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Discounted products -->
  <section class="max-w-7xl lg:pt-40 mx-auto px-4 py-8">
    <!-- Title -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl mb-6 text-[#000000]">Discounted products</h2>
    </div>

    <!-- Grid -->
    <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative">

        <!-- Sale -->
        <div v-if="product.discount" class="absolute top-6 left-5 bg-red-500 text-white text-xs px-2 py-1 rounded-3xl">
          Sale
        </div>

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
          <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition" @click="addToCart(product)">
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

            <!-- Sale -->
            <div v-if="product.discount" class="absolute top-6 left-5 bg-red-500 text-white text-xs px-2 py-1 rounded-3xl">
              Sale
            </div>

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
              <button class="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600 transition" @click="addToCart(product)">
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
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { name: 'Black Bag', category: 'bags', price: 260, image: '/public/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png', title: "A touch watch equipped with modern systems to benefit people", discount: 20 },
  { name: 'Kashmir Bag', category: 'bags', price: 500, image: '/public/images/613d571225293a510ce25fb18819dfc5779169a6.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Touch Watch', category: 'watches', price: 200, image: '/public/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png', title: "A touch watch equipped with modern systems to benefit people", discount: 10 },
  { name: 'Pink Bag', category: 'bags', price: 200, image: '/public/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png', title: "A touch watch equipped with modern systems to benefit people", discount: 5 },
  { name: 'Handmade Bag', category: 'bags', price: 480, image: '/public/images/8479e0930bc4723326670857d692196f28d7729c.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Green Bag', category: 'bags', price: 500, image: '/public/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png', title: "A touch watch equipped with modern systems to benefit people", discount: 30 },
  { name: 'Yellow Bag', category: 'bags', price: 500, image: '/public/images/d94561450d454c34a0149d737ef1ad6e2e4c8974.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Orange Bag', category: 'bags', price: 450, image: '/public/images/658e32fd077e34938624166ef07c67f2781bc2e5.png', title: "A touch watch equipped with modern systems to benefit people", discount: 15 },
];

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


// store/cart.js
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push('/checkout')
}
</script>
