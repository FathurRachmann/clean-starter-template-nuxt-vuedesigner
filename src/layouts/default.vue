<template>
    <div>
      <NavigationMenu />
        <main class="container mx-auto mt-8 px-4">
            <slot />
        </main>
      <FooterMenu />
    </div>
  </template>
  
  <script setup lang="ts">
  import NavigationMenu from '~/components/Navbar.vue'
  import FooterMenu from '~/components/Footer.vue'
  import index from '~/pages/index.vue'
  </script>