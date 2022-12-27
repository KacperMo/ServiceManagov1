<template>
  <va-divider />
  Route name: {{ $router.currentRoute.value.name }} &bull; Route path:
  {{ $router.currentRoute.value.path }} &bull; Route params:
  {{ $router.currentRoute.value.params }}
  <template v-if="$router.currentRoute.value.meta.isLoggedIn"
    >&bull; User is logged in</template
  >
</template>
