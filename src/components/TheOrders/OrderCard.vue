<template>
  <div :class="['p-4 rounded flex flex-col gap-4 lg:flex-row justify-between lg:items-center', bgColor]">
    <div>
      <p class="text-sm text-gray-500">Order Number {{ order.number }}</p>
      <p class="text-lg text-gray-800">#{{ order.id }}</p>
    </div>

    <div>
      <p :class="['text-sm', textColor]">
        <i class="fas fa-check-circle mr-2"></i>{{ order.statusMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  order: Object,
  bgColor: String,
  textColor: String
});
</script>
