<script setup>
const a = 100;
</script>
<template>
  <div class="relative border-4 border-red-500 h-full">
    aaa
    <div
      v-for="item in items"
      :style="{
        border: '1px solid blue',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: item.top,
        left: item.left,
        background: 'green',
      }"
    >
      bb
    </div>
  </div>
</template>
