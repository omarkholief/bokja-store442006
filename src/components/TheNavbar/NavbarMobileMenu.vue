<template>
  <div v-if="isOpen" class="md:hidden bg-white border-t">
    <ul class="flex flex-col p-4 gap-3 text-gray-700 font-medium">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        class="border-b-2 border-transparent pb-1"
        active-class="text-[#008D7C] border-b-[#008D7C]"
        @click="closeMenu"
      >
        {{ link.name }}
      </router-link>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  links: Array,
  closeMenu: Function
})
</script>
