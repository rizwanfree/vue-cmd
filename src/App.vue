<script setup>

import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Topbar />
      <div class="p-4 flex-1 bg-blue-50 overflow-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>
