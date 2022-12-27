<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const activeRouteName = ref("home");

const isRouteActive = (route) => {
  // console.log("isRouteActive", route);
  return activeRouteName.value === route;
};

const setRouteActive = (route) => {
  // console.log("setRouteActive", route);
  activeRouteName.value = route;
};
</script>

<template>
  <div class="row">
    <div class="flex">
      <div class="item item-margin">
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

        <va-sidebar-item
          v-if="!$router.currentRoute.value.meta.isLoggedIn"
          :active="isRouteActive('login')"
          @click="setRouteActive('login')"
        >
          <va-sidebar-item-content>
            <va-icon name="login" />
            <va-sidebar-item-title>
              <RouterLink :to="{ name: 'login' }" class="va-link"
                >Login</RouterLink
              >
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
              <RouterLink :to="{ name: 'logout' }" class="va-link"
                >Logout</RouterLink
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
  <div class="row">
    <div class="flex md12">
      <footer class="item va-text-code">
        <va-divider />
        Route name: {{ $router.currentRoute.value.name }} &bull; Route path:
        {{ $router.currentRoute.value.path }} &bull; Route params:
        {{ $router.currentRoute.value.params }}
        <template v-if="$router.currentRoute.value.meta.isLoggedIn"
          >&bull; User is logged in</template
        >
      </footer>
    </div>
  </div>
</template>
