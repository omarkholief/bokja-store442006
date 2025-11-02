<template>
  <SuperDealsHeader />

  <section class="max-w-7xl lg:pt-40 mx-auto px-4 py-8">
    <h2 class="text-3xl mb-6 text-[#000000]">Discounted products</h2>

    <ProductsGrid :products="products" :isFavorite="isFavorite" :toggleFavorite="toggleFavorite"
      :addToCart="addToCart" />

    <ProductsSwiper :products="products" :isFavorite="isFavorite" :toggleFavorite="toggleFavorite"
      :addToCart="addToCart" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SuperDealsHeader from '../components/TheExclusiveOffers/SuperDealsHeader.vue'
import ProductsGrid from '../components/TheExclusiveOffers/ProductsGrid.vue'
import ProductsSwiper from '../components/TheExclusiveOffers/ProductsSwiper.vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const products = [
  { name: 'Black Bag', category: 'bags', price: 260, image: '/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png', title: "A touch watch equipped with modern systems to benefit people", discount: 20 },
  { name: 'Kashmir Bag', category: 'bags', price: 500, image: '/images/613d571225293a510ce25fb18819dfc5779169a6.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Touch Watch', category: 'watches', price: 200, image: '/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png', title: "A touch watch equipped with modern systems to benefit people", discount: 10 },
  { name: 'Pink Bag', category: 'bags', price: 200, image: '/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png', title: "A touch watch equipped with modern systems to benefit people", discount: 5 },
  { name: 'Handmade Bag', category: 'bags', price: 480, image: '/images/8479e0930bc4723326670857d692196f28d7729c.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Green Bag', category: 'bags', price: 500, image: '/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png', title: "A touch watch equipped with modern systems to benefit people", discount: 30 },
  { name: 'Yellow Bag', category: 'bags', price: 500, image: '/images/d94561450d454c34a0149d737ef1ad6e2e4c8974.png', title: "A touch watch equipped with modern systems to benefit people", },
  { name: 'Orange Bag', category: 'bags', price: 450, image: '/images/658e32fd077e34938624166ef07c67f2781bc2e5.png', title: "A touch watch equipped with modern systems to benefit people", discount: 15 },
]

const favorites = ref([])
const router = useRouter()
const cartStore = useCartStore()

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem("favorites")) || []
})

const isFavorite = (p) => favorites.value.some(f => f.name === p.name)

const toggleFavorite = (p) => {
  if (isFavorite(p)) {
    favorites.value = favorites.value.filter(f => f.name !== p.name)
    alert("❌ Removed")
  } else {
    favorites.value.push(p)
    alert("❤️ Added")
  }
  localStorage.setItem("favorites", JSON.stringify(favorites.value))
}

const addToCart = (p) => {
  cartStore.addToCart(p)
  router.push('/checkout')
}
</script>
