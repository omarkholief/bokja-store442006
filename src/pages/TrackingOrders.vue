<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Track Your Order
    </h1>

    <div class="bg-white shadow-lg rounded-xl p-6 space-y-6">
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
        :bgColor="order.bg"
        :textColor="order.text"
      />

      <OrderDetails :details="details" />

      <OrderProgress
        :progress="66"
        :steps="['Order Placed', 'Processing', 'On the way', 'Delivered']"
      />

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
import OrderCard from "@/components/TheOrders/OrderCard.vue";
import OrderProgress from "@/components/TheOrders/OrderProgress.vue";
import OrderDetails from "@/components/TheOrders/OrderDetails.vue";

const orders = [
  { number: 1, id: "123456789", statusMessage: "Your Order reached successfully", bg: "bg-[#CCFFD5]", text: "text-[#208E33]" },
  { number: 2, id: "987654321", statusMessage: "Your Order at the Delivery Point", bg: "bg-[#FFE5C5]", text: "text-[#F96D00]" },
  { number: 3, id: "456789123", statusMessage: "Your order is in preparation", bg: "bg-[#FFF6E0]", text: "text-[#FFB200]" }
];

const details = {
  address: "123 Main St, Cairo",
  payment: "Credit Card",
  status: "On the way"
};
</script>
