<template>
  <section class="max-w-6xl mx-auto p-4 md:p-8">
    <!-- المسار -->
    <div class="text-sm text-gray-500 mb-4">
      Home Store > <span class="text-gray-700 font-medium">Shopping Cart</span>
    </div>

    <!-- رابط تتبع الطلب -->
    <div class="mb-6 text-teal-500 cursor-pointer hover:underline">🛒 Track your Orders</div>

    <!-- جدول السلة -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-teal-600 text-white">
            <th class="p-4">Product</th>
            <th class="p-4">Price</th>
            <th class="p-4">Quantity</th>
            <th class="p-4">Subtotal</th>
            <th class="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in cart"
            :key="index"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="p-4 flex flex-col lg:flex-row items-center gap-4">
              <img :src="item.image" alt="" class="w-16 h-16 object-cover rounded" />
              <span>{{ item.name }}</span>
            </td>
            <td class="p-4">{{ item.price }} LE</td>
            <td class="p-4 flex items-center gap-2">
              <button
                class="w-8 h-8 border rounded flex items-center cursor-pointer justify-center hover:bg-gray-100"
                @click="() => decreaseQuantity(index)"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                class="w-8 h-8 border rounded flex items-center cursor-pointer justify-center hover:bg-gray-100"
                @click="() => increaseQuantity(index)"
              >
                +
              </button>
            </td>
            <td class="p-4">{{ item.price * item.quantity }} LE</td>
            <td class="p-4">
              <button
                class="text-red-500 hover:text-red-700 cursor-pointer"
                @click="() => removeItem(index)"
              >
                🗑
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- الإجمالي والأزرار -->
    <div class="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
      <button class="text-teal-500 hover:underline cursor-pointer" @click="$router.push('/home')">
        Continue Shopping
      </button>
      <div class="flex items-center gap-4">
        <span class="text-lg font-semibold">Total Price: {{ cartStore.totalPrice }} LE</span>
        <button
          class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded transition cursor-pointer" @click="$router.push('/checkout-page')"
        >
          Checkout
        </button>
      </div>
    </div>

    <!-- المنتجات المتعلقة -->
    <div class="mt-12">
      <h2 class="text-xl font-bold mb-6">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(product, i) in relatedProducts"
          :key="i"
          class="bg-white rounded-lg shadow p-4 flex flex-col"
        >
          <img
            :src="product.image"
            alt=""
            class="w-full h-40 object-contain rounded bg-[#F2F2F2]"
          />
          <h3 class="mt-4 font-semibold">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ product.desc }}</p>
          <div class="mt-auto flex justify-between items-center">
            <button
              @click="() => addToCart(product)"
              class="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 mt-3 rounded text-sm cursor-pointer"
            >
              Add to Cart
            </button>
            <span class="text-teal-600 font-bold">{{ product.price }} LE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const cart = cartStore.cart
const totalPrice = cartStore.totalPrice
const removeItem = cartStore.removeItem
const increaseQuantity = cartStore.increaseQuantity
const decreaseQuantity = cartStore.decreaseQuantity
const addToCart = cartStore.addToCart

// المنتجات المتعلقة
const relatedProducts = ref([
  {
    name: 'Pink Bag',
    desc: 'Elegant pink bag for everyday use',
    price: 200,
    image: '/images/597751ca2928afb32a26ca44f3821fc56973b6d2.png',
  },
  {
    name: 'Baby Orange Bag',
    desc: 'Trendy orange mini bag',
    price: 120,
    image: '/images/8c35632de82be8decbbd19dea481edd439f2cd84.png',
  },
  {
    name: 'Kashmir Bag',
    desc: 'Premium Kashmir style handbag',
    price: 500,
    image: '/images/613d571225293a510ce25fb18819dfc5779169a6.png',
  },
  {
    name: 'Handmade Bag',
    desc: 'Unique handmade artisan bag',
    price: 480,
    image: '/images/8479e0930bc4723326670857d692196f28d7729c.png',
  },
  {
    name: 'Black Bag',
    desc: 'Classic black leather handbag',
    price: 260,
    image: '/images/af141f42b21a332c81c5dfdbe5c9a953f53c3880.png',
  },
])
</script>
