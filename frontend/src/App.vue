<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink :to="{ name: 'user' }">Users</RouterLink> |
    <RouterLink :to="{ name: 'company' }">Companies</RouterLink>
  </nav>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component"></component>
        <template #fallback>Loading...</template>
      </Suspense>
    </template>
  </RouterView>
</template>
