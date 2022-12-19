<script setup>
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore();

const response = await store.logout();
// console.log(response.data.revoked);
</script>

<template>
  <va-alert>Logged out successfully</va-alert>
</template>
