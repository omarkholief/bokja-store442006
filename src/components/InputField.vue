<template>
  <div class="mb-4">
    <div :class="[
      'flex items-center border rounded-lg px-3 py-2 gap-2',
      error ? 'border-red-500' : 'border-gray-300',
    ]">
      <i :class="['fa-solid', icon, 'text-gray-400']"></i>
      <input :type="type" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')" class="flex-1 outline-none" />
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  placeholder: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  error: String,
})

defineEmits(['update:modelValue', 'blur'])
</script>
