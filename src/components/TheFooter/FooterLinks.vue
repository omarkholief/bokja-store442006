<template>
  <div>
    <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">{{ title }}</h3>
    <ul class="space-y-2 text-sm">
      <li v-for="(link, i) in links" :key="i">
        <a href="#" class="hover:underline">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: Array
});
</script>
