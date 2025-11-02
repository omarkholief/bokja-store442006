<template>
  <div class="relative pt-4">
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div class="bg-green-500 h-2 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>

    <div class="flex justify-between text-xs text-gray-500 mt-2">
      <span v-for="step in steps" :key="step">{{ step }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: Number,
  steps: Array
});
</script>
