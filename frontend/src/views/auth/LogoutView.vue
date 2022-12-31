<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore();
const router = useRouter();

try {
  const response = await store.logout();
  const revoked = response.data.revoked;

  if (revoked) {
    router.push({ name: "home" });
  }
} catch (_) {}
</script>

<template>
  <va-alert color="danger">{{ store.errorMessage }}</va-alert>
</template>
