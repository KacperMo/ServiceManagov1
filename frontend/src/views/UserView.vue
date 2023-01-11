<script setup>
import { useUserStore } from "@/stores/user.js";

const store = useUserStore();
await store.all("users");
</script>

<template>
  <h2 class="va-h2">This is a user page</h2>
  <div class="va-table-responsive">
    <table class="va-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
