<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img :src="image" alt="" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan style khusus di sini jika dibutuhkan */
  </style>