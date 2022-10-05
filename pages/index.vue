<script setup>
definePageMeta({ layout: "default" });

const options = [
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
  <div
    class="flex items-center justify-center border-4 border-red-500 text-red-400 h-full"
  >
    <div>
      <TestWheel>
        <TestSlices
          @select="onSelect"
          :options="options"
          :inner="0"
          :outer="120"
        />
        <TestSlices
          @select="onSelect"
          :options="options2"
          :inner="121"
          :outer="240"
        />
        <TestSlices
          @select="onSelect"
          :options="options3"
          :inner="241"
          :outer="350"
        />
      </TestWheel>
      <!-- <EmojiWheel @select="onSelect" :options="options" /> -->
      <!-- <EmojiWheel @select="onSelect" :options="options2" /> -->
      You selected {{ selectedSector?.title }}
    </div>
  </div>
</template>
