<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">

      <ProfileHeader @logout="confirmLogout" />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileInfo :profile="profile" @save="saveChanges" @cancel="cancelEdit" class="lg:col-span-2" />
        <PasswordCard />
        <WalletCard class="lg:col-span-3" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import ProfileHeader from "@/components/TheUserProfile/ProfileHeader.vue";
import ProfileInfo from "@/components/TheUserProfile/ProfileInfo.vue";
import PasswordCard from "@/components/TheUserProfile/PasswordCard.vue";
import WalletCard from "@/components/TheUserProfile/WalletCard.vue";

const router = useRouter();

const profile = reactive({
  fullName: "Nermen",
  email: "nermenhasan02@gmail.com",
  dob: "1999-02-07",
  phone: "+20 1010101010",
  country: "Palestine",
  city: "Bethlehem"
});

function confirmLogout() {
  if (confirm("Are You Sure?")) router.push("/");
}

function saveChanges() {}
function cancelEdit() {}
</script>
