<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <!-- العنوان -->
    <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Track Your Order
    </h1>

    <!-- كارت تتبع الطلب -->
    <div class="bg-white shadow-lg rounded-xl p-6 space-y-6">
      <!-- رقم الطلب -->
      <div class="bg-[#CCFFD5] p-4 rounded flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
        <div>
          <p class="text-sm text-gray-500">Order Number 1</p>
          <p class="text-lg text-gray-800">#123456789</p>
        </div>
        <div>
          <p class="text-sm text-[#208E33]"><i class="fas fa-check-circle mr-2"></i>Your Order reached successfully</p>
        </div>
    </div>

      <!-- رقم الطلب 2 -->
      <div class="bg-[#FFE5C5] p-4 rounded flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
        <div>
          <p class="text-sm text-gray-500">Order Number 2</p>
          <p class="text-lg text-gray-800">#987654321</p>
        </div>
        <div>
          <p class="text-sm text-[#F96D00]"><i class="fas fa-check-circle mr-2"></i>Your Order at the Delivery Point</p>
        </div>
      </div>

      <!-- رقم الطلب 3 -->
      <div class="bg-[#FFF6E0] p-4 rounded flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
        <div>
          <p class="text-sm text-gray-500">Order Number 3</p>
          <p class="text-lg text-gray-800">#456789123</p>
        </div>
        <div>
          <p class="text-sm text-[#FFB200]"><i class="fas fa-check-circle mr-2"></i>Your order is in preparation</p>
        </div>
      </div>

      <!-- تفاصيل الشحن -->
      <div>
        <p class="text-sm text-gray-500">Shipping Address</p>
        <p class="text-lg font-semibold text-gray-800">123 Main St, Cairo</p>
      </div>

      <!-- تفاصيل الدفع -->
      <div>
        <p class="text-sm text-gray-500">Payment Method</p>
        <p class="text-lg font-semibold text-gray-800">Credit Card</p>
      </div>

      <!-- حالة الطلب -->
      <div>
        <p class="text-sm text-gray-500">Current Status</p>
        <p class="text-lg font-semibold text-green-600">On the way</p>
      </div>

      <!-- شريط التقدم -->
      <div class="relative pt-4">
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full w-2/3"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 mt-2">
          <span>Order Placed</span>
          <span>Processing</span>
          <span>On the way</span>
          <span>Delivered</span>
        </div>
      </div>

      <!-- زر الرجوع -->
      <div class="pt-4">
        <router-link
          to="/home"
          class="inline-block px-5 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// لو حابب تجيب بيانات الطلب من API أو Store ممكن تضيف هنا
</script>
