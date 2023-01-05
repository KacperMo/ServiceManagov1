<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const activeRouteName = ref("home");

const isRouteActive = (route) => {
  return activeRouteName.value === route;
};

const setRouteActive = (route) => {
  activeRouteName.value = route;
};
</script>

<template>
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
      <va-icon name="face_5" />
      <va-sidebar-item-title>
        <RouterLink :to="{ name: 'user' }" class="va-link">Users</RouterLink>
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
        <RouterLink :to="{ name: 'companies.index' }" class="va-link"
          >Companies</RouterLink
        >
      </va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>

  <va-sidebar-item
    v-if="!$router.currentRoute.value.meta.isLoggedIn"
    :active="isRouteActive('login')"
    @click="setRouteActive('login')"
  >
    <va-sidebar-item-content>
      <va-icon name="login" />
      <va-sidebar-item-title>
        <RouterLink :to="{ name: 'login' }" class="va-link">Login</RouterLink>
      </va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>

  <va-sidebar-item
    v-if="$router.currentRoute.value.meta.isLoggedIn"
    :active="isRouteActive('logout')"
    @click="setRouteActive('logout')"
  >
    <va-sidebar-item-content>
      <va-icon name="logout" />
      <va-sidebar-item-title>
        <RouterLink :to="{ name: 'logout' }" class="va-link">Logout</RouterLink>
      </va-sidebar-item-title>
    </va-sidebar-item-content>
  </va-sidebar-item>
</template>
