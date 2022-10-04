<script setup>
definePageMeta({ layout: "default" });
const selectedSector = $ref();
const onSelect = (sector) => (selectedSector = sector);
</script>

<template>
  <div
    class="flex items-center justify-center border-4 border-red-500 text-red-400 h-full"
  >
    <div>
      <Wheel @select="onSelect" />
      You selected {{ selectedSector?.point }}
    </div>
  </div>
</template>
