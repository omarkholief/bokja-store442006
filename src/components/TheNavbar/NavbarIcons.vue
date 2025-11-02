<template>
  <ul class="flex items-center gap-4">
    <router-link to="/profile">
      <li><i class="fas fa-user cursor-pointer"></i></li>
    </router-link>
    <router-link to="/category-page">
      <li><i class="fas fa-search cursor-pointer"></i></li>
    </router-link>
    <router-link to="/favourites">
      <li><i class="fas fa-heart cursor-pointer"></i></li>
    </router-link>
    <router-link to="/checkout">
      <li><i class="fas fa-shopping-cart cursor-pointer"></i></li>
    </router-link>
  </ul>
</template>
