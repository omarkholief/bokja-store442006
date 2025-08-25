<template>
  <footer class="bg-[#2E333A] text-white py-10 mt-20 lg:mt-30">
    <div class="container mx-auto px-6 md:px-10 max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-10">

      <!-- Logo & Description -->
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <router-link to="/home"><i class="fas fa-store text-[#008D7C] text-2xl"></i></router-link>
          <h2 class="text-4xl">Store</h2>
        </div>
        <p class="text-sm text-[#D9D9D9] mb-2">We Accept:</p>
        <div class="flex space-x-2">
          <img src="/images/visa-inc-png-18.png" alt="Visa" class="h-6 bg-white p-1">
          <img src="/images/OIP.jpeg" alt="MasterCard" class="h-6 bg-white p-1">
          <img src="/images/1655980011paypal-icon-transparent.png" alt="PayPal" class="h-6 bg-white p-1">
          <img src="/images/stripe1461.jpg" alt="Stripe" class="h-6 bg-white p-1">
          <img src="/images/google-pay-logo-transparent-free-png.webp" alt="Google Pay" class="h-6 bg-white p-1">
        </div>
      </div>

      <!-- Home -->
      <div>
        <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">Home</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">E-Wallet</a></li>
          <li><a href="#" class="hover:underline">Delivery Points</a></li>
        </ul>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">Products</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Home & Furniture</a></li>
          <li><a href="#" class="hover:underline">Computers</a></li>
          <li><a href="#" class="hover:underline">Fashion</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" class="hover:underline">FAQ’s</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-2xl mb-4 border-b-2 border-[#008D7C] w-fit">Let’s contact</h3>
        <div class="flex space-x-3 mb-4">
          <a href="#" class="bg-[#2AABEE] rounded-2xl p-1"><img src="/icons/telegram.svg"
              class="w-6 h-6 text-[#FFFFFF]" alt="Telegram"></a>
          <a href="#" class="bg-[#1877F2] rounded-2xl p-1"><img src="/icons/facebook.svg" class="w-6 h-6"
              alt="Facebook"></a>
          <a href="#" class="bg-gradient-to-tr from-yellow-400 via-pink-500 rounded-2xl p-1"><img
              src="/icons/instagram.svg" class="w-6 h-6" alt="Instagram"></a>
          <a href="#" class="bg-[#25D366] rounded-2xl p-1"><img src="/icons/whatsapp.svg" class="w-6 h-6"
              alt="WhatsApp"></a>
          <a href="#" class="bg-[#FF0000] rounded-2xl p-1"><img src="/icons/youtube.svg" class="w-6 h-6"
              alt="YouTube"></a>
        </div>
        <p class="text-sm mb-2">Drop your email below to get notified, whenever we upload discount coupons of your
          favorite brands.</p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Email Address"
            class="w-full px-4 py-2 rounded border border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#008D7C]" />
          <button class="bg-[#008D7C] text-white px-4 py-2 rounded hover:bg-[#007B6D] text-sm cursor-pointer">Subscribe</button>
        </form>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      © 2025 Bokjastore, all rights reserved.
    </div>
  </footer>

</template>
