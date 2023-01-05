<script setup>
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store.js";

const route = useRoute();
const store = useStore();

await store.getOne("companies", route.params.id);
</script>

<template>
  <h2 class="va-h2">Company</h2>
  <div class="row">
    <div class="flex">
      <va-card>
        <va-card-title>{{ store.data.name }}</va-card-title>
        <va-card-content>
          <div class="va-table-responsive">
            <table class="va-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nazwa:</td>
                  <td>{{ store.data.name }}</td>
                </tr>
                <tr>
                  <td>Miasto:</td>
                  <td>{{ store.data.city }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </va-card-content>
        <va-card-actions align="between">
          <RouterLink :to="{ name: 'companies.index' }" class="va-link"
            >Powrót</RouterLink
          >
          <RouterLink
            :to="{ name: 'companies.edit', params: store.data.id }"
            class="va-link"
            >Edytuj</RouterLink
          >
        </va-card-actions>
      </va-card>
    </div>
  </div>
</template>
