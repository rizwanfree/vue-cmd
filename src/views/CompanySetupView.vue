<script setup lang="ts">

import { inject } from "vue";

const agent = inject("agent");


// Function to update the clearing agent info
const updateAgent = async () => {
  try {
    const res = await fetch(`http://localhost:3000/clearingAgents/${agent.id}`, {
      method: 'PATCH', // or 'PUT' to replace the whole object
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(agent)
    })

    if (!res.ok) throw new Error('Failed to update agent')

    const updatedAgent = await res.json()

    // Update reactive object with new data
    Object.assign(agent, updatedAgent)

    alert('Agent updated successfully!')

  } catch (err) {
    console.error('Error updating agent:', err)
    alert('Failed to update agent')
  }
}
</script>

<template>

  <div class="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">Company Information</h2>

    <!-- Logo -->
<!--    <div class="mb-4 flex items-center space-x-4">-->
<!--      <img :src="agent.logo" alt="Company Logo" class="w-24 h-24 object-cover rounded border"/>-->

<!--    </div>-->

    <!-- Company Name -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Company Name</label>
      <input type="text" v-model="agent.company_name" class="w-full px-3 py-2 border rounded"/>
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Email</label>
      <input type="email" v-model="agent.email" class="w-full px-3 py-2 border rounded"/>
    </div>

    <!-- Phone -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Phone Number</label>
      <input type="text" v-model="agent.phone_number" class="w-full px-3 py-2 border rounded"/>
    </div>

    <!-- Address -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">Address</label>
      <textarea v-model="agent.address" class="w-full px-3 py-2 border rounded" rows="3"></textarea>
    </div>

    <!-- License Number -->
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1">License Number</label>
      <input type="text" v-model="agent.license_number" class="w-full px-3 py-2 border rounded"/>
    </div>

    <!-- Active Status -->
    <div class="mb-4 flex items-center space-x-2">
      <input type="checkbox" v-model="agent.is_active" id="active"/>
      <label for="active" class="text-gray-700 font-medium">Active</label>
    </div>

    <div class="mt-6 flex space-x-4">
      <button @click="updateAgent" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
      <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
    </div>
  </div>
</template>

<style scoped>

</style>