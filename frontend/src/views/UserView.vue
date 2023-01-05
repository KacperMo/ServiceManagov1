<script setup>
import { useUserStore } from "@/stores/user.js";

const store = useUserStore();
<<<<<<< Updated upstream
await store.all("users");
=======
const data = await store.all("users");
// console.log(data);
>>>>>>> Stashed changes
</script>

<template>
  <h2 class="va-h2">This is a user page</h2>
<<<<<<< Updated upstream
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
=======
  <!-- <h3>{{ store.errorMessage }}</h3>
  <h3>{{ store.responseStatus }}</h3>
  <h3>{{ store.users }}</h3> -->
>>>>>>> Stashed changes
</template>
