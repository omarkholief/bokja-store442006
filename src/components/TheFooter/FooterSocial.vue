<template>
  <div>
    <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">Let’s contact</h3>

    <div class="flex space-x-3 mb-4">
      <a v-for="item in social" :key="item.href" :href="item.href" target="_blank"
         :class="item.bg + ' rounded-2xl p-1'">
        <img :src="item.icon" class="w-6 h-6" />
      </a>
    </div>

    <p class="text-sm mb-2">
      Drop your email below to get notified whenever we upload discount coupons.
    </p>

    <slot></slot>
  </div>
</template>

<script setup>
const social = [
  { href: "https://web.telegram.org/a/#1655873927", icon: "/icons/telegram.svg", bg: "bg-[#2AABEE]" },
  { href: "https://www.facebook.com/omar.kholef.5", icon: "/icons/facebook.svg", bg: "bg-[#1877F2]" },
  { href: "https://www.instagram.com/omaribrahim507/", icon: "/icons/instagram.svg", bg: "bg-gradient-to-tr from-yellow-400 via-pink-500" },
  { href: "https://wa.me/201020304941", icon: "/icons/whatsapp.svg", bg: "bg-[#25D366]" },
  { href: "https://www.youtube.com/@omarkholief343", icon: "/icons/youtube.svg", bg: "bg-[#FF0000]" }
]
</script>
