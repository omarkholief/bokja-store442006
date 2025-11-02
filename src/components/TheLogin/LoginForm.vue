<template>
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
      <div :class="['flex items-center border rounded-lg px-3 py-2 gap-2', errors.email ? 'border-red-500' : 'border-gray-300']">
        <i class="fa-solid fa-envelope text-gray-400"></i>
        <input v-model="email" type="email" placeholder="Email" class="flex-1 outline-none" />
      </div>
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div class="mb-4">
      <div :class="['flex items-center border rounded-lg px-3 py-2 gap-2', errors.password ? 'border-red-500' : 'border-gray-300']">
        <i class="fa-solid fa-lock text-gray-400"></i>
        <input v-model="password" type="password" placeholder="Password" class="flex-1 outline-none" />
      </div>
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>

    <!-- Remember / Forget -->
    <div class="flex justify-between items-center mb-6">
      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="rememberMe" class="cursor-pointer" />
        <span class="cursor-pointer">Remember me</span>
      </label>

      <button class="text-teal-500 hover:underline cursor-pointer" @click="$emit('openForgot')">
        Forget Password?
      </button>
    </div>

    <button @click="login" class="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition cursor-pointer">
      Login
    </button>

    <div class="flex items-center my-6">
      <hr class="flex-1 border-gray-300" />
      <span class="mx-2 text-gray-500 text-sm">Or login with</span>
      <hr class="flex-1 border-gray-300" />
    </div>

    <button class="w-full border border-gray-300 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-50">
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
      Google
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const emit = defineEmits(["openForgot"])
const router = useRouter()

const email = ref("")
const password = ref("")
const rememberMe = ref(false)
const errors = ref({})

const login = () => {
  errors.value = {}

  if (!email.value) {
    errors.value.email = "Email is required"
  } else if (!email.value.endsWith("@gmail.com")) {
    errors.value.email = "Email must end with @gmail.com"
  }

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
  if (!password.value) {
    errors.value.password = "Password is required"
  } else if (!passRegex.test(password.value)) {
    errors.value.password = "Weak password format"
  }

  if (!Object.keys(errors.value).length) router.push("/home")
}
</script>
