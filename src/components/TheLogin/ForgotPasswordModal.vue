<template>
  <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h3 class="text-xl font-bold mb-4">Reset Password</h3>

      <input type="password" v-model="newPassword" placeholder="Enter new password"
        class="w-full border rounded-lg px-3 py-2 mb-3" />

      <input type="password" v-model="confirmPassword" placeholder="Confirm password"
        class="w-full border rounded-lg px-3 py-2 mb-4" />

      <div class="flex justify-end gap-3">
        <button @click="$emit('update:modelValue', false)" class="px-4 py-2 border rounded-lg cursor-pointer">
          Cancel
        </button>
        <button @click="save" class="px-4 py-2 bg-teal-500 text-white rounded-lg cursor-pointer">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(["update:modelValue"])

const newPassword = ref("")
const confirmPassword = ref("")

const save = () => {
  if (!newPassword.value || !confirmPassword.value) {
    alert("Please fill in all fields")
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }
  alert("Password changed successfully (demo mode)")
  emit("update:modelValue", false)
}
</script>
