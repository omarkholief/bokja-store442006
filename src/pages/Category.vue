<template>
  <div class="flex flex-col md:flex-row gap-6 p-4 max-w-7xl mx-auto">
    <!-- Sidebar Filters -->
    <aside class="w-full md:w-1/4 bg-white shadow p-4 rounded">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-bold text-lg">Filters</h2>
        <button @click="clearFilters" class="text-red-500 text-sm hover:underline cursor-pointer">
          Clear All Filters
        </button>
      </div>

      <!-- Availability -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Availability</h3>
        <label class="block">
          <input type="radio" name="availability" value="in" v-model="filters.availability" class="mr-2"> In Stock
        </label>
        <label class="block">
          <input type="radio" name="availability" value="out" v-model="filters.availability" class="mr-2"> Out of Stock
        </label>
      </div>

      <!-- Color -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Color</h3>
        <div class="flex gap-2 flex-wrap">
          <div v-for="color in colors" :key="color" :title="color" :style="{ backgroundColor: color }"
            class="w-6 h-6 rounded-full border cursor-pointer"
            @click="filters.color = filters.color === color ? '' : color"
            :class="{ 'ring-2 ring-teal-500': filters.color === color }">
          </div>
        </div>
      </div>

      <!-- Price -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Price (Max: {{ filters.price }} E£)</h3>
        <input type="range" min="0" max="1000" step="50" v-model="filters.price" class="w-full">
      </div>

      <!-- Size -->
      <div class="mb-6">
        <h3 class="font-semibold mb-2">Size</h3>
        <div class="flex gap-2 flex-wrap">
          <label v-for="size in sizes" :key="size" class="border rounded px-3 py-1 cursor-pointer"
            :class="{ 'bg-teal-500 text-white': filters.size === size }"
            @click="filters.size = filters.size === size ? '' : size">
            {{ size }}
          </label>
        </div>
      </div>

      <!-- Category -->
      <div>
        <h3 class="font-semibold mb-2">Category</h3>
        <label v-for="cat in categories" :key="cat" class="block">
          <input type="radio" name="category" :value="cat" v-model="filters.category" class="mr-2"> {{ cat }}
        </label>
      </div>
    </aside>

    <!-- Products Section -->
    <main class="flex-1">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Bags</h2>
        <p class="text-gray-500">Showing {{ filteredProducts.length }} results</p>
      </div>

      <!-- Products Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="product in filteredProducts" :key="product.id" class="bg-white shadow rounded p-4 flex flex-col">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-contain rounded mb-4">
          <h3 class="font-semibold text-lg">{{ product.name }}</h3>
          <p class="text-teal-600 font-bold mb-2">{{ product.price }} E£</p>
          <p class="text-sm text-gray-500 flex-1">{{ product.title }}</p>
          <div class="mt-4 flex justify-between items-center">
            <button class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 cursor-pointer"
              @click="addToCart(product)">Add to Cart</button>
            <button class="cursor-pointer" @click="toggleFavorite(product)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor"
                :class="isFavorite(product) ? 'text-red-500' : 'text-gray-500'" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 19.071l-1.414-1.414a5.5 5.5 0 017.778-7.778L12 9.343l.515-.464a5.5 5.5 0 017.778 7.778l-1.414 1.414L12 21.485l-6.879-6.879z" />
              </svg>
            </button>


          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

export default {
  name: "CategoryPage",
  data() {
    return {
      filters: {
        availability: "",
        color: "",
        price: 1000,
        size: "",
        category: ""
      },
      favorites: [], // تخزين المفضلة في المكون
      colors: ["pink", "orange", "red", "black", "purple", "yellow"],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Bags", "Headphones", "Food", "Watches"],
      products: [
        {
          name: 'Black Bag',
          category: 'Bags',
          price: 260,
          color: 'black',
          size: 'M',
          inStock: true,
          image: '/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png',
          title: 'Stylish black bag for everyday use'
        },
        {
          name: 'Headphone',
          category: 'Headphones',
          price: 260,
          color: 'black',
          size: 'M',
          inStock: true,
          image: '/images/b5da2dc712b83bfd274d000aaa0b3f5b636128ad (1).png',
          title: 'A touch watch equipped with modern systems to benefit people',
        },
        {
          name: 'Kashmir Bag',
          category: 'Bags',
          price: 500,
          color: 'pink',
          size: 'L',
          inStock: false,
          image: '/images/613d571225293a510ce25fb18819dfc5779169a6.png',
          title: 'Elegant Kashmir bag perfect for special occasions'
        },
        {
          name: 'Olive Oil',
          category: 'Food',
          price: 260,
          color: 'yellow',
          size: 'L',
          inStock: true,
          image: '/images/64f92ff4e093c06b445b83810fea8b9f9167b312 (1).png',
          title: 'Premium quality olive oil'
        },
        {
          name: 'Orange',
          category: 'Food',
          price: 260,
          color: 'yellow',
          size: 'S',
          inStock: true,
          image: '/images/e7ffe1c3e626545a63a24f0f4a03486f8c920777 (1).png',
          title: 'Good quality orange'
        },
        {
          name: 'Pink Bag',
          category: 'Bags',
          price: 200,
          color: 'pink',
          size: 'S',
          inStock: true,
          image: '/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png',
          title: 'Trendy pink bag'
        },
        {
          name: 'Handmade Bag',
          category: 'Bags',
          price: 480,
          color: 'red',
          size: 'M',
          inStock: true,
          image: '/images/8479e0930bc4723326670857d692196f28d7729c.png',
          title: 'Handmade with love and care'
        },
        {
          name: 'Green Bag',
          category: 'Bags',
          price: 500,
          color: 'green',
          size: 'L',
          inStock: false,
          image: '/images/92bcdd1161f4a4b5c045319a680732b11da6ed86 (1).png',
          title: 'Spacious green bag'
        },
        {
          name: 'Baby Orange Bag',
          category: 'Bags',
          price: 120,
          color: 'orange',
          size: 'S',
          inStock: true,
          image: '/images/8c35632de82be8decbbd19dea481edd439f2cd84.png',
          title: 'Cute baby orange bag'
        },
        {
          name: 'Touch Watch',
          category: 'Watches',
          price: 200,
          color: 'black',
          size: 'M',
          inStock: true,
          image: '/images/7ab57a846cd56bb947e76420b1f4e60193d7f82f (1).png',
          title: 'Modern touch watch'
        },
        {
          name: 'Yellow Bag',
          category: 'Bags',
          price: 500,
          color: 'yellow',
          size: 'XL',
          inStock: true,
          image: '/images/d94561450d454c34a0149d737ef1ad6e2e4c8974.png',
          title: 'Bright yellow bag'
        },
        {
          name: 'Orange Bag',
          category: 'Bags',
          price: 450,
          color: 'orange',
          size: 'L',
          inStock: false,
          image: '/images/658e32fd077e34938624166ef07c67f2781bc2e5.png',
          title: 'Classic orange bag'
        },
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(p => {
        return (
          (!this.filters.availability ||
            (this.filters.availability === "in" && p.inStock) ||
            (this.filters.availability === "out" && !p.inStock)
          ) &&
          (!this.filters.color || p.color === this.filters.color) &&
          (p.price <= this.filters.price) &&
          (!this.filters.size || p.size === this.filters.size) &&
          (!this.filters.category || p.category === this.filters.category)
        );
      });
    }
  },
  mounted() {
    // تحميل المفضلة من localStorage عند فتح الصفحة
    this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  },
  methods: {
    clearFilters() {
      this.filters = { availability: "", color: "", price: 1000, size: "", category: "" };
    },
    isFavorite(product) {
      return this.favorites.some(p => p.name === product.name);
    },
    toggleFavorite(product) {
      if (this.isFavorite(product)) {
        // إزالة من المفضلة
        this.favorites = this.favorites.filter(p => p.name !== product.name);
        alert("تم حذف المنتج من المفضلة ❌");
      } else {
        // إضافة إلى المفضلة
        this.favorites.push(product);
        alert("تمت إضافة المنتج إلى المفضلة ❤️");
      }
      // حفظ التغييرات في localStorage
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    addToCart(product) {
      const cartStore = useCartStore()
      const router = useRouter()
      cartStore.addToCart(product)
      router.push('/checkout')
    },
  }
};
</script>


<style>
body {
  background-color: #f9fafb;
}
</style>
