<script setup>
definePageMeta({ layout: "default" });

const options = [
  {
    title: "Õnnelik",
    fill: "#ffaaaa",
    icon: "https://api.iconify.design/iconoir:3d-add-hole.svg",
  },
  {
    title: "Elevil",
    fill: "yellow",
  },
  {
    title: "Üllatunud",
    fill: "red",
  },
  {
    title: "Mures",
    fill: "green",
  },
  {
    title: "Vihane",
    fill: "#ffaaaa",
  },
  {
    title: "Kurb",
    fill: "yellow",
  },
  {
    title: "Hooliv",
    fill: "red",
  },
  {
    title: "Armastav",
    fill: "green",
  },
];

const options2 = options
  .map((o) => o.options || [{ title: "Some" }, { title: "Thing" }])
  .flat();

const options3 = options2
  .map((o) => [{ title: "Some" }, { title: "Thing" }])
  .flat();

const selectedSector = $ref();
const onSelect = (sector) => (selectedSector = sector);
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div>
      <TestWheel>
        <TestSlices
          @select="onSelect"
          :options="options"
          :inner="50"
          :outer="150"
          :corner="5"
          :padding="2"
        />
      </TestWheel>
      You selected {{ selectedSector?.title }}
    </div>
  </div>
</template>
