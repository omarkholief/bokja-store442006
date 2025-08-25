<template>

  <Navbar v-if="!route.meta.hideLayout" />

  <router-view />

  <Footer v-if="!route.meta.hideLayout" />

  <ScrollToTop />

</template>

<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

const route = useRoute();

</script>
