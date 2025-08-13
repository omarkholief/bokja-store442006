<template>
  <section class="max-w-6xl mx-auto p-4 md:p-8">
    <!-- Breadcrumb -->
    <div class="text-sm text-gray-500 mb-4">
      Home Store > Shopping Cart > <span class="text-[#000000] text-[16px]">Shipping Details</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Form -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4 bg-teal-500 text-white p-2 rounded">
          Shipping Details
        </h2>

        <form @submit.prevent="confirmOrder" class="space-y-4">
          <!-- City -->
          <div>
            <label class="block mb-1 text-sm font-medium">City *</label>
            <select v-model="city"
              :class="['w-full border rounded p-2', errors.city ? 'border-red-500' : 'border-gray-400']">
              <option value="">Choose your city</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
            </select>
              <p v-if="errors.city" class="text-red-500 text-sm mt-1">{{ errors.city }}</p>
          </div>

          <!-- Address -->
          <div>
            <label class="block mb-1 text-sm font-medium">Address</label>
            <input type="text" v-model="address"
              :class="['w-full border rounded p-2', errors.address ? 'border-red-500' : 'border-gray-400']"
              placeholder="Enter your delivery address" />
            <p v-if="errors.address" class="text-red-500 text-sm mt-1">{{ errors.address }}</p>
          </div>

          <!-- Delivery Point -->
          <div>
            <label class="block mb-1 text-sm font-medium">Delivery Point</label>
            <select v-model="deliveryPoint"
              :class="['w-full border rounded p-2', errors.deliveryPoint ? 'border-red-500' : 'border-gray-400']">
              <option value="">Choose your delivery point</option>
              <option value="Branch A">Branch A</option>
              <option value="Branch B">Branch B</option>
            </select>
            <p v-if="errors.deliveryPoint" class="text-red-500 text-sm mt-1">{{ errors.deliveryPoint }}</p>
          </div>

          <!-- Payment Icons -->
          <div class="flex gap-3">
            <img src="/public//images/OIP.jpeg" alt="MasterCard" class="h-8" />
            <img src="/public/images/visa-inc-png-18.png" alt="Visa" class="h-8" />
            <img src="/public/images/1655980011paypal-icon-transparent.png" alt="PayPal" class="h-8" />
          </div>

          <!-- Card Name -->
          <div>
            <label class="block mb-1 text-sm font-medium">Name on card *</label>
            <input type="text" v-model="cardName"
              :class="['w-full border rounded p-2', errors.cardName ? 'border-red-500' : 'border-gray-400']"
              placeholder="Name on card" />
            <p v-if="errors.cardName" class="text-red-500 text-sm mt-1">{{ errors.cardName }}</p>
          </div>

          <!-- Card Number -->
          <div>
            <label class="block mb-1 text-sm font-medium">Card Number *</label>
            <input type="text" v-model="cardNumber"
              :class="['w-full border rounded p-2', errors.cardNumber ? 'border-red-500' : 'border-gray-400']"
              placeholder="0000 0000 0000 0000" />
            <p v-if="errors.cardNumber" class="text-red-500 text-sm mt-1">{{ errors.cardNumber }}</p>
          </div>

          <!-- Expiration & CVV -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block mb-1 text-sm font-medium">Expiration *</label>
              <input type="text" v-model="expiration"
                :class="['w-full border rounded p-2', errors.expiration ? 'border-red-500' : 'border-gray-400']"
                placeholder="MM/YY" />
              <p v-if="errors.expiration" class="text-red-500 text-sm mt-1">{{ errors.expiration }}</p>
            </div>
            <div>
              <label class="block mb-1 text-sm font-medium">CVV *</label>
              <input type="text" v-model="cvv"
                :class="['w-full border rounded p-2', errors.cvv ? 'border-red-500' : 'border-gray-400']"
                placeholder="CVV" />
              <p v-if="errors.cvv" class="text-red-500 text-sm mt-1">{{ errors.cvv }}</p>
            </div>
          </div>

          <!-- Payment Options -->
          <div class="flex flex-col gap-2">
            <label class="border border-gray-400 p-2 rounded"><input type="radio" name="payment" class="mr-2" />
              Collected Points</label>
            <p class="text-xs text-teal-600 mb-4">You have 500 Collecting Points</p>
            <label class="border border-gray-400 p-2 rounded"><input type="radio" name="payment" class="mr-2" /> Cash On
              Delivery</label>
          </div>

          <!-- Back + Confirm -->
          <div class="flex justify-between items-center mt-6">
            <button type="button" @click="$router.push('/checkout')"
              class="text-gray-600 hover:underline cursor-pointer">
              ← Back to shopping cart
            </button>
            <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-2xl cursor-pointer">
              Confirm Order
            </button>
          </div>
        </form>
      </div>

      <!-- Summary -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4 bg-teal-500 text-white p-2 rounded">Summary</h2>
        <div class="flex justify-between py-2 border-b">
          <span>{{ cart.length }} Items:</span>
          <span>EGY {{ cartStore.itemsTotal }}</span>
        </div>
        <div class="flex justify-between py-2 border-b">
          <span>Shipping fee:</span>
          <span>EGY {{ shippingFee }}</span>
        </div>
        <div class="flex justify-between py-2 border-b">
          <span>Taxes:</span>
          <span>EGY {{ taxes }}</span>
        </div>
        <div class="flex justify-between py-2 font-bold">
          <span>Total:</span>
          <span>EGY {{ total }}</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <button @click="showModal = false" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          ✖
        </button>
        <div class="flex flex-col items-center text-center">
          <img src="/public/images/61f653f7e866efebe94651c6a57da01793091b46.gif" alt="Confirmed" class="w-40 mb-4" />
          <h2 class="text-lg font-bold mb-2">Your order is Confirmed</h2>
          <button @click="trackOrder"
            class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full cursor-pointer">
            Track your Order
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()
const cart = cartStore.cart

// Shipping Details fields
const city = ref('')
const address = ref('')
const deliveryPoint = ref('')
const cardName = ref('')
const cardNumber = ref('')
const expiration = ref('')
const cvv = ref('')

// Tracking missing fields
const errors = ref({
  city: '',
  address: '',
  deliveryPoint: '',
  cardName: '',
  cardNumber: '',
  expiration: '',
  cvv: '',
})

// Fees
const shippingFee = 60
const taxes = 0

// Totals
const total = computed(() => cartStore.totalPrice + shippingFee + taxes)

// Modal
const showModal = ref(false)

const confirmOrder = () => {
  // هنا ممكن تتحقق من البيانات قبل التأكيد
  let hasError = false

  // Reset errors
  Object.keys(errors.value).forEach(key => {
    errors.value[key] = ''
  })

  // Validation rules
  if (!city.value) { errors.value.city = 'Please enter your city'; hasError = true }
  if (!address.value) { errors.value.address = 'Please enter your address'; hasError = true }
  if (!deliveryPoint.value) { errors.value.deliveryPoint = 'Please select a delivery point'; hasError = true }
  if (!cardName.value) { errors.value.cardName = 'Please enter the cardholder name'; hasError = true }
  if (!cardNumber.value) { errors.value.cardNumber = 'Please enter the card number'; hasError = true }
  if (!expiration.value) { errors.value.expiration = 'Please enter the expiration date'; hasError = true }
  if (!cvv.value) { errors.value.cvv = 'يرجى إدخال رمز الأمان (CVV)'; hasError = true }


  // لو فيه أخطاء، ما يفتحش المودال
  if (hasError) return

  // لو كله تمام
  showModal.value = true
}


const trackOrder = () => {
  // تنفيذ الطلب
  showModal.value = false

  // تفريغ السلة بعد تأكيد الطلب
  cartStore.clearCart()

  // إعادة التوجيه إلى صفحة تتبع الطلبات
  router.push('/tracking-orders')
}
</script>
