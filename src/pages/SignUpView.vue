<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">

      <!-- Left Side Image -->
      <div class="bg-gradient-to-b from-teal-400 to-teal-500 flex-1 flex items-center justify-center p-6">
        <img src="/images/19489b707acd1e15155152bafaa66e8add13383e.png" alt="SignUp Illustration"
          class="max-w-full h-auto" />
      </div>

      <!-- Right Side Form -->
      <div class="flex-1 p-8 md:p-12">
        <div class="flex justify-end">
          <router-link to="/" class="text-sm border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-100">
            Login
          </router-link>
        </div>

        <h2 class="text-2xl font-bold mt-6">Welcome to Bokja Store</h2>
        <p class="text-gray-500 mb-6">Come on and create an account</p>

        <!-- Full Name -->
        <InputField icon="fa-user" placeholder="Full Name in English" v-model="fullName" :error="errors.fullName"
          @blur="validateField('fullName')" />

        <!-- Phone Number -->
        <InputField icon="fa-phone" placeholder="Phone Number" v-model="phone" :error="errors.phone"
          @blur="validateField('phone')" />

        <!-- City -->
        <InputField icon="fa-city" :options="cities" placeholder="City" v-model="city" :error="errors.city"
          @blur="validateField('city')" />

        <!-- Country -->
        <SelectField icon="fa-flag" :options="countries" placeholder="Country" v-model="country" :error="errors.country"
          @blur="validateField('country')" />

        <!-- Gender -->
        <SelectField icon="fa-venus-mars" :options="['Male', 'Female']" placeholder="Gender" v-model="gender"
          :error="errors.gender" @blur="validateField('gender')" />

        <!-- Date of Birth -->
        <InputField icon="fa-calendar" placeholder="Date Of Birth" type="date" v-model="dob" :error="errors.dob"
          @blur="validateField('dob')" />

        <!-- Email -->
        <InputField icon="fa-envelope" placeholder="Email" v-model="email" :error="errors.email"
          @blur="validateField('email')" />

        <!-- Password -->
        <InputField icon="fa-lock" placeholder="Password" type="password" v-model="password" :error="errors.password"
          @blur="validateField('password')" />

        <!-- Confirm Password -->
        <InputField icon="fa-lock" placeholder="Confirm Password" type="password" v-model="confirmPassword"
          :error="errors.confirmPassword" @blur="validateField('confirmPassword')" />

        <!-- Terms -->
        <div class="flex items-center gap-2 my-4">
          <input type="checkbox" class="cursor-pointer" v-model="agree" />
          <span class="text-sm">
            I agree with the website's <a href="#" class="text-teal-500 hover:underline">terms and conditions</a>
          </span>
        </div>
        <p v-if="errors.agree" class="text-red-500 text-sm mb-2">{{ errors.agree }}</p>

        <!-- Sign up button -->
        <button @click="signUp"
          class="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition cursor-pointer">
          Sign up
        </button>

        <!-- Or -->
        <div class="flex items-center my-6">
          <hr class="flex-1 border-gray-300" />
          <span class="mx-2 text-gray-500 text-sm">Or Sign up with</span>
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
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import InputField from "../components/InputField.vue"
import SelectField from "../components/SelectField.vue"

const router = useRouter()

const fullName = ref("")
const phone = ref("")
const city = ref("")
const country = ref("")
const gender = ref("")
const dob = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const agree = ref(false)

const errors = ref({})
const cities = ["Cairo", "Giza", "Alexandria"]
const countries = ["Egypt", "Saudi Arabia", "UAE"]

// التحقق لكل خانة منفردة
const validateField = (field) => {
  switch (field) {
    case "fullName":
      errors.value.fullName = fullName.value ? "" : "Full name is required"
      break
    case "phone":
      errors.value.phone = phone.value ? "" : "Phone number is required"
      break
    case "city":
      errors.value.city = city.value ? "" : "City is required"
      break
    case "country":
      errors.value.country = country.value ? "" : "Country is required"
      break
    case "gender":
      errors.value.gender = gender.value ? "" : "Gender is required"
      break
    case "dob":
      errors.value.dob = dob.value ? "" : "Date of birth is required"
      break
    case "email":
      errors.value.email = email.value.endsWith("@gmail.com")
        ? ""
        : "Email must end with @gmail.com"
      break
    case "password":
      if (!password.value) {
        errors.value.password = "Password is required"
      } else {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
        if (!strongPasswordRegex.test(password.value)) {
          errors.value.password =
            "Password must be at least 8 characters, include uppercase, lowercase, number, and symbol"
        } else {
          errors.value.password = ""
        }
      }
      break
    case "confirmPassword":
      errors.value.confirmPassword =
        confirmPassword.value === password.value
          ? ""
          : "Passwords do not match"
      break
  }
}

const signUp = () => {
  // تحقق من كل الحقول
  validateField("fullName")
  validateField("phone")
  validateField("city")
  validateField("country")
  validateField("gender")
  validateField("dob")
  validateField("email")
  validateField("password")
  validateField("confirmPassword")

  if (!agree.value) {
    errors.value.agree = "You must agree to terms"
  } else {
    errors.value.agree = ""
  }

  // لو مفيش أخطاء → روح على الهوم
  const hasErrors = Object.values(errors.value).some((err) => err !== "")
  if (!hasErrors) {
    router.push("/home")
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
