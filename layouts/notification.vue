<template>
  <div>
    <img src="/assets/screenshot.jpeg" class="fixed inset-0" />
    <div class="bg-black/60 border fixed inset-0"></div>
    <div
      class="text-red fixed right-0 left-0 m-4 p-4 rounded-2xl bg-white shadow-2xl"
    >
      <slot></slot>
    </div>
  </div>
</template>
