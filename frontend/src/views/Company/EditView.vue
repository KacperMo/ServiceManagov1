<script setup>
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store.js";

import { reactive } from "vue";
const route = useRoute();
const store = useStore();

await store.getOne("companies", route.params.id);

const company = reactive({
  name: store.data.name,
  city: store.data.city,
});

const onSubmit = () => {
  console.log("on submit");
  console.log(company);
};
</script>

<template>
  <h2 class="va-h2">Edycja</h2>
  <va-form style="width: 300px" tag="form" @submit.prevent="onSubmit">
    <va-input v-model="company.name" type="text" label="Nazwa" />
    <va-input v-model="company.city" label="City" class="mt-3" />
    <va-button type="submit" class="mt-3">Edytuj</va-button>
  </va-form>
  <RouterLink
    :to="{ name: 'companies.show', params: store.data.id }"
    class="va-link mt-3"
    >Powrót</RouterLink
  >
</template>
