<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(true);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const dropdowns = ref([
  {
    name: 'Setups',
    links: [
      {label: 'Company Information', route: '/company-setup'},
      {label: 'User Management', route: '#'},
      {label: 'Items', route: '#'},
      {label: 'Maritime', route: '#'},
      {label: 'Duty & Charges', route: '#'},
      //{label: 'Company Setup', route: '/company-setup'},
      ],
    open: false
  },
  {
    name: 'Clients',
    links: [
        {label: 'Client List', route: '/clients-setup'},
    ],
    open: false
  }

]);

const toggleDropdown = (index: number) => {
  dropdowns.value[index].open = !dropdowns.value[index].open;
};
</script>

<template>
  <div :class="`bg-gray-500 text-white h-screen flex flex-col transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'}`">
    <!-- Logo Area -->
    <div class="flex items-center justify-between p-5 border-b ">
      <span class="font-bold text-lg" v-if="isOpen">MaritimeApp</span>
<!--      <button @click="toggleSidebar" class="p-1 hover:bg-blue-800 rounded">-->
<!--        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>-->
<!--        </svg>-->
<!--      </button>-->
    </div>

    <!-- Dashboard Link -->
    <div class="mt-4">
      <router-link to="/" class="block px-6 py-2 hover:bg-blue-800 rounded">
        Dashboard

      </router-link>
    </div>

    <!-- Dropdown Menus -->
    <div class="mt-4 flex-1 overflow-auto">
      <div v-for="(dropdown, index) in dropdowns" :key="index" class="px-2">
        <button @click="toggleDropdown(index)"
                class="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-400 rounded">
          {{ dropdown.name }}
          <i v-if="!dropdown.open" class="pi pi-arrow-down"></i>
          <i v-else class="pi pi-arrow-up"></i>
        </button>

        <!-- Animated dropdown -->
        <transition
            enter-active-class="transition-all duration-1000 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-40 opacity-100"
            leave-active-class="transition-all duration-500 ease-in"
            leave-from-class="max-h-40 opacity-100"
            leave-to-class="max-h-0 opacity-0"
        >
          <div v-if="dropdown.open" class="ml-4 mt-1 space-y-1 overflow-hidden">
            <router-link
                v-for="(link, idx) in dropdown.links"
                :key="idx"
                :to="link.route"
                class="block px-4 py-1 hover:bg-gray-400 rounded"
            >
              {{ link.label }}
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
