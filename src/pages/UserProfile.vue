<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <!-- Container -->
    <div class="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
      <!-- Top Navigation -->
      <div class="flex flex-wrap items-center justify-between border-b pb-4 mb-6">
        <h1 class="text-2xl font-semibold">My Profile</h1>
        <div class="flex flex-wrap gap-4">
          <button class="text-gray-700 hover:text-blue-500">Password & Security</button>
          <button class="text-gray-700 hover:text-blue-500">Payment</button>
          <button @click="confirmLogout" class="cursor-pointer text-red-500 hover:underline">
            Logout
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Personal Information -->
        <div class="lg:col-span-2 bg-gray-50 p-4 rounded-lg border">
          <h2 class="font-semibold mb-4">Personal Information</h2>
          <div class="space-y-3">
            <!-- Full Name -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-user mr-2"></i>Full Name</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.fullName }}</p>
              </template>
              <template v-else>
                <input v-model="profile.fullName" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- Email -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-envelope mr-2"></i>Email Address</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.email }}</p>
              </template>
              <template v-else>
                <input v-model="profile.email" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- Date of Birth -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-calendar-alt mr-2"></i>Date of Birth</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.dob }}</p>
              </template>
              <template v-else>
                <input type="date" v-model="profile.dob" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- Phone -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-phone mr-2"></i>Phone Number</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.phone }}</p>
              </template>
              <template v-else>
                <input v-model="profile.phone" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- Country -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-map-marker-alt mr-2"></i>Country</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.country }}</p>
              </template>
              <template v-else>
                <input v-model="profile.country" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- City -->
            <div>
              <p class="text-gray-500 text-sm"><i class="fas fa-map-marker-alt mr-2"></i>City</p>
              <template v-if="!isEditing">
                <p class="text-gray-900">{{ profile.city }}</p>
              </template>
              <template v-else>
                <input v-model="profile.city" class="border rounded px-2 py-1 w-full" />
              </template>
            </div>

            <!-- Buttons -->
            <div class="mt-4">
              <template v-if="!isEditing">
                <button @click="isEditing = true"
                  class="cursor-pointer px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                  <i class="fas fa-edit mr-2"></i>Edit
                </button>
              </template>
              <template v-else>
                <button @click="saveChanges"
                  class="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                  Save
                </button>
                <button @click="cancelEdit"
                  class="cursor-pointer px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                  Cancel
                </button>
              </template>
            </div>
          </div>
        </div>

        <!-- Password & Security -->
        <div class="bg-gray-50 p-4 rounded-lg border">
          <h2 class="font-semibold mb-4"><i class="fas fa-lock mr-2"></i>Password & Security</h2>
          <p class="text-gray-500 text-sm">Password</p>
          <button class="cursor-pointer mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            <i class="fas fa-lock mr-2"></i>Change Password
          </button>
        </div>

        <!-- Payment Method -->
        <div class="bg-gray-50 p-4 rounded-lg border lg:col-span-3">
          <h2 class="font-semibold mb-4">Payment Methods</h2>
          <p class="text-[#008D7C]">You have 5000 EGP in your e-wallet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const isEditing = ref(false);

const profile = reactive({
  fullName: "Nermen",
  email: "nermenhasan02@gmail.com",
  dob: "1999-02-07",
  phone: "+20 1010101010",
  country: "Palestine",
  city: "Bethlehem"
});

const backup = reactive({ ...profile });

import { useRouter } from "vue-router";

const router = useRouter();

function confirmLogout() {
  if (confirm("Are You Sure?")) {
    router.push("/"); // هنا بيوديه لصفحة اللوج أوت / الصفحة الرئيسية
  }
}



function saveChanges() {
  isEditing.value = false;
  Object.assign(backup, profile);
}

function cancelEdit() {
  Object.assign(profile, backup);
  isEditing.value = false;
}
</script>
