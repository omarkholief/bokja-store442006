<template>
  <div class="flex flex-wrap items-center justify-between border-b pb-4 mb-6">
    <h1 class="text-2xl font-semibold">My Profile</h1>
    <div class="flex flex-wrap gap-4">
      <button class="text-gray-700 hover:text-blue-500">Password & Security</button>
      <button class="text-gray-700 hover:text-blue-500">Payment</button>
      <button @click="$emit('logout')" class="cursor-pointer text-red-500 hover:underline">
        Logout
      </button>
    </div>
  </div>
</template>
