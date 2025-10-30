<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl mb-6">Featured Products</h2>
      <router-link to="/category-page"><a href="#" class="text-teal-500 hover:underline">See All</a></router-link>
  </div>

  <!-- Grid -->
    <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="(product, index) in featuredProducts" :key="index"
        @click="$router.push(`/category/${product.category}`)"
        class="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition relative cursor-pointer">
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

        <div class="flex justify-between items-center w-full mb-20">
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

            <div class="flex justify-between items-center w-full mb-10">
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

const featuredProducts = [
  {
    name: 'Black Bag',
    category: 'bags',
    price: 260,
    image: '/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Kashmir Bag',
    category: 'bags',
    price: 500,
    image: '/images/613d571225293a510ce25fb18819dfc5779169a6.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Olive Oil',
    category: 'Food',
    price: 260,
    image: '/images/64f92ff4e093c06b445b83810fea8b9f9167b312 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Pink Bag',
    category: 'bags',
    price: 200,
    image: '/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Handmade Bag',
    category: 'bags',
    price: 480,
    image: '/images/8479e0930bc4723326670857d692196f28d7729c.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Green Bag',
    category: 'bags',
    price: 500,
    image: '/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Baby Orange Bag',
    category: 'bags',
    price: 120,
    image: '/images/8c35632de82be8decbbd19dea481edd439f2cd84.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Touch Watch',
    category: 'Electronics',
    price: 200,
    image: '/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Yellow Bag',
    category: 'bags',
    price: 500,
    image: '/images/d94561450d454c34a0149d737ef1ad6e2e4c8974.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
  {
    name: 'Orange Bag',
    category: 'bags',
    price: 450,
    image: '/images/658e32fd077e34938624166ef07c67f2781bc2e5.png',
    title: 'A touch watch equipped with modern systems to benefit people',
  },
]

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

</script>

<style lang="scss" scoped>

</style>
