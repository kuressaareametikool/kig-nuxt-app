<script setup>
const items = range(0, 180, 180 / 6).map((i) => polar(i, 50));
</script>
<template>
  <div class="relative border-4 border-red-500 m-32">
    <div>Some content here</div>
    <div
      v-for="(item, i) in items"
      class="w-10 rounded-full h-10 absolute bg-black text-white grid place-items-center text-center -translate-x-5 -translate-y-5"
      :style="{
        left: item.x / 1.2 + 'px',
        top: i * 50 + 'px',
      }"
    >
      {{ i }}
    </div>
  </div>
</template>
