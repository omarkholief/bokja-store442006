<template>
  <div class="mb-4">
    <div
      :class="[
        'flex items-center border rounded-lg px-3 py-2 gap-2',
        error ? 'border-red-500' : 'border-gray-300',
      ]"
    >
      <i :class="['fa-solid', icon, 'text-gray-400']"></i>
      <select
        :v-model="modelValue"
        @change="$emit('update:modelValue', modelValue)"
        class="flex-1 outline-none bg-transparent"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  placeholder: String,
  options: Array,
  modelValue: String,
  error: String,
})
</script>
