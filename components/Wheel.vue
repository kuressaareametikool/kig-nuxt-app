<script setup>
import { arc } from "d3";

// const d = arcpath(0, 10, 50, 100, 4);
// console.log(d);

const icons = ["https://api.iconify.design/iconoir:emoji-look-bottom.svg"];

const hsl = (h, s, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;
const d = arc()
  .cornerRadius(10)
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(deg2rad(90))();

const count = 8;
const sector = 360 / count;
const sectors = Array.from({ length: count }).map((_, i) => {
  const currentAngle = i * sector;
  const d = arc()
    .padAngle(deg2rad(2))
    .cornerRadius(10)
    .innerRadius(50)
    .outerRadius(100)
    .startAngle(deg2rad(currentAngle))
    .endAngle(deg2rad(currentAngle + sector))();
  const fill = hsl(i * 10, 100, 50);
  const point = polar(currentAngle + sector / 2, 50 + (100 - 50) / 2);
  return { d, fill, point };
});
console.log(sectors);
</script>
<template>
  <svg width="300" height="300" class="border border-blue-500">
    <g transform="translate(150,150)">
      <g v-for="sector in sectors">
        <path :d="sector.d" :fill="sector.fill" stroke="black" />
        <!-- <circle :cx="sector.point.x" :cy="sector.point.y" r="2" /> -->
        <image
          :x="sector.point.x"
          :y="sector.point.y"
          :href="icons[0]"
          :transform-origin="sector.point.x + ' ' + sector.point.y"
          transform="scale(1.5) translate(-8,-8)"
        />
        <!-- <text :x="sector.point.x" :y="sector.point.y">Hello</text> -->
      </g>
      <!-- <path :d="d2" stroke="red" fill="none" /> -->
    </g>
  </svg>
</template>
