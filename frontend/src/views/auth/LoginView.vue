<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const store = useAuthStore();
const email = ref("artur-milkowski@tlen.pl");
const password = ref("1234567");

const onSubmit = async () => {
  const payload = { email: email.value, password: password.value };
  const response = await store.login(payload);
  if (response?.status === 200) {
    router.push({ name: "user" });
  }
};
</script>

<template>
  <!-- <h1>__{{ store.errorMessage }}__</h1> -->
  <va-alert v-if="store.data" color="danger">{{ store.data }}</va-alert>
  <va-form @submit.prevent="onSubmit" tag="form" style="width: 300px">
    <va-input v-model="email" label="Login" autofocus="true" />
    <va-input v-model="password" class="mt-1" label="Password" />
    <va-button type="submit" class="mt-1">Submit</va-button>
  </va-form>
  <p>
    <RouterLink :to="{ name: 'register' }" class="va-link">Register</RouterLink>
  </p>
</template>
