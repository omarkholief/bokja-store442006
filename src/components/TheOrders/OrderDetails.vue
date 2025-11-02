<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-gray-500">Shipping Address</p>
      <p class="text-lg font-semibold text-gray-800">{{ details.address }}</p>
    </div>

    <div>
      <p class="text-sm text-gray-500">Payment Method</p>
      <p class="text-lg font-semibold text-gray-800">{{ details.payment }}</p>
    </div>

    <div>
      <p class="text-sm text-gray-500">Current Status</p>
      <p class="text-lg font-semibold text-green-600">{{ details.status }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  details: Object
});
</script>
