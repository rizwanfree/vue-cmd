<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '../assets/vue.svg';

const router = useRouter();
const userMenuOpen = ref(false);

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value;
};
</script>

<template>
  <div class="bg-gray-500 text-white flex justify-end items-center px-4 py-2 border-b">
    <!-- Avatar -->
    <div class="relative">
      <button @click="toggleUserMenu" class="flex items-center space-x-2 hover:bg-gray-400 p-2.5 rounded">
        <img :src="logo" alt="avatar" class="rounded-full w-8 h-8">
        <span class="hidden md:block">User</span>
      </button>

      <!-- Dropdown -->
      <div v-if="userMenuOpen" class="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
        <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-200">Profile</router-link>
        <router-link to="/settings" class="block px-4 py-2 hover:bg-gray-200">Settings</router-link>
        <router-link to="/logout" class="block px-4 py-2 hover:bg-gray-200">Logout</router-link>
      </div>
    </div>
  </div>
</template>
