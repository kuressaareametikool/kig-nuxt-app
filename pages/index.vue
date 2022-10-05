<script setup>
definePageMeta({ layout: "default" });

const options1 = [
  {
    title: "Õnnelik",
    fill: "#ffaaaa",
    options: [{ title: "Rahulolev" }, { title: "Roomus" }],
  },
  {
    title: "Elevil",
    fill: "yellow",
    options: [{ title: "Optimistlik" }, { title: "Ergas" }],
  },
  {
    title: "Üllatunud",
    fill: "red",
    options: [{ title: "Segaduses" }, { title: "Kergendunud" }],
  },
  {
    title: "Mures",
    fill: "green",
    options: [{ title: "Ebakindel" }, { title: "Hirmul" }],
  },
  {
    title: "Vihane",
    fill: "#ffaaaa",
    options: [{ title: "E" }, { title: "Vaenulik" }],
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

const options2 = [
  {
    title: "Sad",
    fill: "red",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
  {
    title: "Green",
    fill: "green",
    icon: "https://api.iconify.design/iconoir:emoji-look-bottom.svg",
  },
];

const selectedSector = $ref();
const onSelect = (sector) => (selectedSector = sector);
</script>

<template>
  <div
    class="flex items-center justify-center border-4 border-red-500 text-red-400 h-full"
  >
    <div>
      <TestWheel>
        <TestSlices
          @select="onSelect"
          :options="options1"
          :inner="0"
          :outer="150"
        />
        <TestSlices
          @select="onSelect"
          :options="options1"
          :inner="151"
          :outer="250"
        />
      </TestWheel>
      <!-- <EmojiWheel @select="onSelect" :options="options1" /> -->
      <!-- <EmojiWheel @select="onSelect" :options="options2" /> -->
      You selected {{ selectedSector?.title }}
    </div>
  </div>
</template>
