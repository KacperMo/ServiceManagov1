<script setup>
import { useUserStore } from "@/stores/user.js";

const store = useUserStore();
const data = await store.all("users");
// console.log(data);
</script>

<template>
  <h2 class="va-h2">This is a user page</h2>
  <!-- <h3>{{ store.errorMessage }}</h3>
  <h3>{{ store.responseStatus }}</h3>
  <h3>{{ store.users }}</h3> -->
</template>
