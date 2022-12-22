<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const store = useAuthStore();
const email = ref("");
const password = ref("");
// const user = ref(null);

const onSubmit = async () => {
  const payload = { email: email.value, password: password.value };
  const response = await store.register(payload);
  if (response?.status === 200) {
    // user.value = response.data;
    // console.log(user.value);
    router.push({ name: "login" });
  }
};
</script>

<template>
  <!-- <h1>__{{ store.errorMessage }}__</h1> -->
  <h2 class="va-h2">Register</h2>
  <va-alert v-if="store.data" color="danger">{{ store.data }}</va-alert>
  <va-form @submit.prevent="onSubmit" tag="form" style="width: 300px">
    <va-input v-model="email" label="Login" autofocus="true" />
    <va-input v-model="password" class="mt-1" label="Password" />
    <va-button type="submit" class="mt-1">Submit</va-button>
  </va-form>
</template>
