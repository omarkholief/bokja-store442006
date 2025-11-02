<template>
  <footer class="bg-[#2E333A] text-white py-10 mt-20 lg:mt-30">
    <div class="container mx-auto px-6 md:px-10 max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-10">

      <FooterLogo />

      <FooterLinks title="Home" :links="['E-Wallet', 'Delivery Points']" />
      <FooterLinks title="Products" :links="['Home & Furniture', 'Computers', 'Fashion']" />
      <FooterLinks title="Company" :links="['Privacy Policy', 'Terms & Conditions', 'FAQ’s']" />

      <FooterSocial>
        <FooterSubscribe />
      </FooterSocial>

    </div>

    <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      © 2025 Bokjastore, all rights reserved.
    </div>
  </footer>
</template>

<script setup>
import FooterLogo from "./TheFooter/FooterLogo.vue";
import FooterLinks from "./TheFooter/FooterLinks.vue";
import FooterSocial from "./TheFooter/FooterSocial.vue";
import FooterSubscribe from "./TheFooter/FooterSubscribe.vue";
</script>
