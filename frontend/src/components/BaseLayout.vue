<template>
  <div class="row">
    <div class="flex">
      <div class="item mr-1">
        <slot name="nav"></slot>
      </div>
    </div>
    <div class="flex">
      <div class="item">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="flex md12">
      <footer class="item va-text-code">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
