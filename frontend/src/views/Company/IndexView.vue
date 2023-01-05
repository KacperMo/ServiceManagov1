<script setup>
import { useStore } from "@/stores/store.js";

const store = useStore();

await store.all("companies");
</script>

<template>
  <h2 class="va-h2">Companies</h2>
  <va-alert v-if="store.errorMessage" color="danger" class="mb-1">
    {{ store.errorMessage }}
  </va-alert>
  <div v-if="store.collection.length" class="va-table-responsive">
    <table class="va-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Miasto</th>
          <th>NIP</th>
          <th>Telefon</th>
          <th>Utworzono</th>
          <th>Akcja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in store.collection" :key="company.id">
          <td>{{ company.id }}</td>
          <td>{{ company.city }}</td>
          <td>{{ company.NIP }}</td>
          <td>{{ company.phone_number }}</td>
          <td>{{ company.created_at }}</td>
          <td>
            <RouterLink
              :to="{ name: 'companies.show', params: { id: company.id } }"
              class="va-link"
              >Pokaż</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <va-alert v-else color="info">Brak danych</va-alert>
</template>
