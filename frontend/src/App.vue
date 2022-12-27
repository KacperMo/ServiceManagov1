<script setup>
import { RouterView } from "vue-router";
import BaseLayout from "@/components/BaseLayout.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppNav from "@/components/AppNav.vue";
</script>

<template>
  <BaseLayout>
    <template #nav>
      <AppNav />
    </template>
    <template #main>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense>
            <component :is="Component"></component>
            <template #fallback>Loading...</template>
          </Suspense>
        </template>
      </RouterView>
    </template>
    <template #footer>
      <AppFooter />
    </template>
  </BaseLayout>
</template>
