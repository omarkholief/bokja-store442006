<script setup>
import { reactive, ref } from "vue";

const props = defineProps(["profile"]);
const emit = defineEmits(["save", "cancel"]);

const isEditing = ref(false);
const backup = reactive({ ...props.profile });

function saveChanges() {
  emit("save");
  Object.assign(backup, props.profile);
  isEditing.value = false;
}

function cancelEdit() {
  Object.assign(props.profile, backup);
  emit("cancel");
  isEditing.value = false;
}
</script>

<template>
  <div class="bg-gray-50 p-4 rounded-lg border">
    <h2 class="font-semibold mb-4">Personal Information</h2>

    <div class="space-y-3">
      <div v-for="field in [
        ['Full Name','fullName','fas fa-user'],
        ['Email Address','email','fas fa-envelope'],
        ['Date of Birth','dob','fas fa-calendar-alt'],
        ['Phone','phone','fas fa-phone'],
        ['Country','country','fas fa-map-marker-alt'],
        ['City','city','fas fa-map-marker-alt']
      ]" :key="field[1]">
        <p class="text-gray-500 text-sm"><i :class="field[2] + ' mr-2'"></i>{{ field[0] }}</p>

        <template v-if="!isEditing">
          <p class="text-gray-900">{{ props.profile[field[1]] }}</p>
        </template>

        <template v-else>
          <input v-model="props.profile[field[1]]"
          class="border rounded px-2 py-1 w-full"
          :type="field[1] === 'dob' ? 'date' : 'text'" />
        </template>
      </div>

      <div class="mt-4">
        <button v-if="!isEditing"
        @click="isEditing = true"
        class="cursor-pointer px-4 py-2 border rounded hover:bg-gray-100">
          <i class="fas fa-edit mr-2"></i>Edit
        </button>

        <div v-else>
          <button @click="saveChanges"
          class="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">Save</button>
          <button @click="cancelEdit"
          class="cursor-pointer px-4 py-2 border rounded hover:bg-gray-100">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
