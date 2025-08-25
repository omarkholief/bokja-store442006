<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">

      <!-- Left side image -->
      <div class="bg-gradient-to-b from-teal-400 to-teal-500 flex-1 flex items-center justify-center p-6">
        <img src="/public/images/19489b707acd1e15155152bafaa66e8add13383e.png" alt="Login Illustration"
          class="max-w-full h-auto" />
      </div>

      <!-- Right side form -->
      <div class="flex-1 p-8 md:p-12">
        <div class="flex justify-end">
          <router-link to="/signup" class="text-sm border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-100">
            Sign up
          </router-link>
        </div>

        <h2 class="text-2xl font-bold mt-6">Welcome back!</h2>
        <p class="text-gray-500 mb-6">Enter your email and password</p>

        <!-- Email -->
        <div class="mb-4">
          <div
            :class="['flex items-center border rounded-lg px-3 py-2 gap-2', errors.email ? 'border-red-500' : 'border-gray-300']">
            <i class="fa-solid fa-envelope text-gray-400"></i>
            <input v-model="email" type="email" placeholder="Email" class="flex-1 outline-none" />
          </div>
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Password -->
        <div class="mb-4">
          <div
            :class="['flex items-center border rounded-lg px-3 py-2 gap-2', errors.password ? 'border-red-500' : 'border-gray-300']">
            <i class="fa-solid fa-lock text-gray-400"></i>
            <input v-model="password" type="password" placeholder="Password" class="flex-1 outline-none" />
          </div>
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>

          
        </div>

        <!-- Remember me -->
        <div class="flex justify-between items-center mb-6">
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="rememberMe" class="cursor-pointer" />
            <span class="cursor-pointer">Remember me</span>
          </label>
          <button class="text-teal-500 hover:underline cursor-pointer" @click="showForgotPassword = true">Forget
            Password?</button>
        </div>

        <!-- Login button -->
        <button @click="login"
          class="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition cursor-pointer">
          Login
        </button>

        <!-- Or -->
        <div class="flex items-center my-6">
          <hr class="flex-1 border-gray-300" />
          <span class="mx-2 text-gray-500 text-sm">Or login with</span>
          <hr class="flex-1 border-gray-300" />
        </div>

        <!-- Google -->
        <button
          class="w-full border border-gray-300 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-50">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
          Google
        </button>
      </div>
    </div>

    <!-- Forgot Password Popup -->
    <div v-if="showForgotPassword" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">Reset Password</h3>
        <input type="password" v-model="newPassword" placeholder="Enter new password"
          class="w-full border rounded-lg px-3 py-2 mb-3" />
        <input type="password" v-model="confirmPassword" placeholder="Confirm password"
          class="w-full border rounded-lg px-3 py-2 mb-4" />
        <div class="flex justify-end gap-3">
          <button @click="showForgotPassword = false" class="px-4 py-2 border rounded-lg cursor-pointer">Cancel</button>
          <button @click="resetPassword"
            class="px-4 py-2 bg-teal-500 text-white rounded-lg cursor-pointer">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")
const rememberMe = ref(false)
const errors = ref({})
const showForgotPassword = ref(false)
const newPassword = ref("")
const confirmPassword = ref("")

const login = () => {
  errors.value = {}

  if (!email.value) {
    errors.value.email = "Email is required"
  } else if (!email.value.endsWith("@gmail.com")) {
    errors.value.email = "Email must end with @gmail.com"
  }

  if (!password.value) {
    errors.value.password = "Password is required"
  } else {
    // تحقق من قوة الباسورد
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    if (!strongPasswordRegex.test(password.value)) {
      errors.value.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and symbol"
    }
  }

  if (Object.keys(errors.value).length === 0) {
    router.push("/home")
  }
}


const resetPassword = () => {
  if (!newPassword.value || !confirmPassword.value) {
    alert("Please fill in all fields")
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }
  alert("Password changed successfully (demo mode)")
  showForgotPassword.value = false
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
