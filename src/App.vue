<script setup>

import {reactive, provide, onBeforeMount} from "vue";

import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";


const agent = reactive({
  company_name: '',
  email: '',
  phone_number: '',
  address: '',
  license_number: '',
  logo: '',
  is_active: true
})


const fetchAgent = async () => {
  try {
    const response = await fetch('http://localhost:3000/clearingAgents/1');
    const data = await response.json();

    Object.assign(agent, data);

  } catch (err) {

    console.log(err.message);
  }
};


onBeforeMount(async () => {
  await fetchAgent();
});

// provide reactive objects globally
provide('agent', agent);

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
