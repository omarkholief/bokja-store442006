<template>
  <button v-show="showButton" @click="scrollToTop" class="fixed bottom-6 right-6 bg-[#008D7C] text-white p-3 rounded-full shadow-lg hover:bg-[#006f62] transition
           z-50 md:z-50 cursor-pointer">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
