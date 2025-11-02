<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">

      <!-- Left Image -->
      <div class="bg-gradient-to-b from-teal-400 to-teal-500 flex-1 flex items-center justify-center p-6">
        <img src="/images/19489b707acd1e15155152bafaa66e8add13383e.png"
             alt="SignUp Illustration"
             class="max-w-full h-auto" />
      </div>

      <!-- Right -->
      <div class="flex-1 p-8 md:p-12">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
