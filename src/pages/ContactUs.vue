<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <h2 class="text-2xl font-bold text-center text-[#008D7C] mb-6">How can we help you?</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-8">
        <div class="md:col-span-1 flex justify-center">
          <div class="rounded-full p-4">
            <img src="/images/b4e2412138433ca18c8045296a11b75a64ec0004.png" alt="Contact Us" class="rounded-full">
          </div>
        </div>
        <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button class="bg-white p-4 rounded-lg text-center hover:bg-teal-300 transition lg:w-45 lg:h-24">Place an order <i class="fas fa-shopping-cart ml-2"></i></button>
          <button class="bg-white p-4 rounded-lg text-center hover:bg-teal-300 transition lg:w-50 lg:h-24">Pay For Your Order <i class="fas fa-credit-card ml-2"></i></button>
          <button class="bg-white p-4 rounded-lg text-center hover:bg-teal-300 transition lg:w-45 lg:h-24">Track Your Order <i class="fas fa-truck ml-1"></i></button>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white p-10 rounded-xl grid grid-cols-1 md:grid-cols-1 text-center gap-4 mb-8">
        <div class="bg-white p-4 border border-[#ABABAB] rounded-lg shadow flex justify-between items-center">
          <h3 class="font-semibold">How bokja store works</h3>
          <span class="text-2xl cursor-pointer">+</span>
        </div>
        <div class="bg-white p-4 border border-[#ABABAB] rounded-lg shadow flex justify-between items-center">
          <h3 class="font-semibold">How to Pay for Your Order</h3>
          <span class="text-2xl cursor-pointer">+</span>
        </div>
        <div class="bg-white p-4 border border-[#ABABAB] rounded-lg shadow flex justify-between items-center">
          <h3 class="font-semibold">How to Track Your Order</h3>
          <span class="text-2xl cursor-pointer">+</span>
        </div>
      </div>

      <!-- Contact Info Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-30">
        <div class="">
          <h3 class="text-3xl mb-4">Get In Touch</h3>
          <p class="text-gray-600 mb-4">Feel free to drop us an email or your queries and we will get back to you as
            soon as possible. We are here to provide you with more information and create effective solution to your
            instructional need.</p>
          <ul class="space-y-6">
              <li class="flex items-center text-xl"><span class="w-10 h-10 bg-[#008D7C] rounded-full mr-4 py-[9px] pl-[13px]"><i class="fas fa-map-marker-alt text-white"></i></span> Address: <span class="text-gray-500 ml-2">West Bank
                Palestine</span></li>
            <li class="flex items-center text-xl"><span class="w-10 h-10 bg-[#008D7C] rounded-full mr-4 py-[8px] pl-[11px]"><i class="fas fa-phone-alt text-white"></i></span> Phone Number: <span class="text-gray-500 ml-2">+20
              101050510</span></li>
            <li class="flex items-center text-xl"><span class="w-10 h-10 bg-[#008D7C] rounded-full mr-4 py-[8px] pl-[11px]"><i class="fas fa-envelope text-white"></i></span> Email:
            <span class="text-gray-500 ml-2">info@bokjastore.com</span></li>
          </ul>
          <div class="flex flex-col space-x-4 mt-10">
            <h1 class="mb-2">Follow Us:</h1>
            <div class="flex space-x-6">
              <a href="#" class="text-white bg-[#008D7C] hover:bg-[#007B6D] py-2 px-4 rounded-4xl"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-white bg-[#008D7C] hover:bg-[#007B6D] py-2 px-4 rounded-4xl"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-white bg-[#008D7C] hover:bg-[#007B6D] py-2 px-4 rounded-4xl"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl ">Request A Call Back</h3>
          <p class=" mb-4">Let us help you get started!</p>
          <form>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" placeholder="Full Name" class="w-full p-2 mb-4 border rounded">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Email" class="w-full p-2 mb-4 border rounded">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" placeholder="Subject" class="w-full p-2 mb-4 border rounded">
            <label for="message">Message:</label>
            <textarea id="message" placeholder="Message" class="w-full p-2 mb-4 border rounded" rows="4"></textarea>
            <button type="submit"
              class="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition cursor-pointer">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
