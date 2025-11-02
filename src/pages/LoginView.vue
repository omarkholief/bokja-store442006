<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">

      <LoginImage />
      <LoginForm @openForgot="showForgotPassword = true" />
    </div>

    <ForgotPasswordModal v-model="showForgotPassword" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import LoginImage from "@/components/TheLogin/LoginImage.vue"
import LoginForm from "@/components/TheLogin/LoginForm.vue"
import ForgotPasswordModal from "@/components/TheLogin/ForgotPasswordModal.vue"

const showForgotPassword = ref(false)
</script>
