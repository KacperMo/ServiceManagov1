<script setup>
const onSubmit = () => {
  console.log("on submit");
};
</script>

<template>
  <va-form @submit.prevent="onSubmit" tag="form" style="width: 300px">
    <va-input label="Login" autofocus="true" />
    <va-input class="mt-1" label="Password" />
    <va-button type="submit" class="mt-1">Submit</va-button>
  </va-form>
</template>
