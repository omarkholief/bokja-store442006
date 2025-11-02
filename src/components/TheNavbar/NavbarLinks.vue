<template>
  <ul class="hidden md:flex items-center gap-6 text-gray-700 font-medium">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="hover:text-[#008D7C] border-b-2 border-transparent hover:border-[#008D7C]"
      active-class="text-[#008D7C] border-b-[#008D7C]"
    >
      {{ link.name }}
    </router-link>
  </ul>
</template>

<script setup>
defineProps({
  links: Array
})
</script>
