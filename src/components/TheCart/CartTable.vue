<template>
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
        <tr v-for="(item, index) in cart" :key="index" class="border-b hover:bg-gray-50 transition">
          <td class="p-4 flex flex-col lg:flex-row items-center gap-4">
            <img :src="item.image" class="w-16 h-16 object-cover rounded" />
            <span>{{ item.name }}</span>
          </td>

          <td class="p-4">{{ item.price }} LE</td>

          <td class="p-4 flex items-center gap-2">
            <button class="w-8 h-8 border rounded hover:bg-gray-100" @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="w-8 h-8 border rounded hover:bg-gray-100" @click="increaseQuantity(index)">+</button>
          </td>

          <td class="p-4">{{ item.price * item.quantity }} LE</td>

          <td class="p-4">
            <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

const cart = cartStore.cart
const removeItem = cartStore.removeItem
const increaseQuantity = cartStore.increaseQuantity
const decreaseQuantity = cartStore.decreaseQuantity
</script>
