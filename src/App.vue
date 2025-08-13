<template>

  <Navbar v-if="!route.meta.hideLayout" />

  <router-view />

  <Footer v-if="!route.meta.hideLayout" />

</template>

<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';

const route = useRoute();

</script>
