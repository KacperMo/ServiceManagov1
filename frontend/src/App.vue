<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const activeRouteName = ref("home");
const route = useRoute();
// const items = [
//   { name: "home" },
//   { name: "user" },
//   { name: "company" },
//   { name: "about" },
// ];
const isRouteActive = (route) => {
  console.log("isRouteActive", route);
  return activeRouteName.value === route;
};

const setRouteActive = (route) => {
  console.log("setRouteActive", route);
  activeRouteName.value = route;
};
</script>

<template>
  <div class="row">
    <div class="flex">
      <div class="item">
        <va-sidebar-item
          :active="isRouteActive('home')"
          @click="setRouteActive('home')"
        >
          <va-sidebar-item-content>
            <va-icon name="dashboard" />
            <va-sidebar-item-title>
              <RouterLink to="/" class="va-link">Home</RouterLink>
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item
          :active="isRouteActive('about')"
          @click="setRouteActive('about')"
        >
          <va-sidebar-item-content>
            <va-icon name="room" />
            <va-sidebar-item-title>
              <RouterLink to="/about" class="va-link">About</RouterLink>
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item
          :active="isRouteActive('user')"
          @click="setRouteActive('user')"
        >
          <va-sidebar-item-content>
            <va-icon name="person" />
            <va-sidebar-item-title>
              <RouterLink :to="{ name: 'user' }" class="va-link"
                >Users</RouterLink
              >
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item
          :active="isRouteActive('company')"
          @click="setRouteActive('company')"
        >
          <va-sidebar-item-content>
            <va-icon name="apartment" />
            <va-sidebar-item-title>
              <RouterLink :to="{ name: 'company' }" class="va-link"
                >Companies</RouterLink
              >
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </div>
    </div>
    <div class="flex">
      <div class="item">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Suspense>
              <component :is="Component"></component>
              <template #fallback>Loading...</template>
            </Suspense>
          </template>
        </RouterView>
      </div>
    </div>
  </div>
</template>
