<script setup>
import { arc } from "d3";

// const d = arcpath(0, 10, 50, 100, 4);
// console.log(d);

const d = arc()
  .cornerRadius(10)
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(deg2rad(90))();

const d2 = arc()
  .cornerRadius(10)
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(deg2rad(180))
  .endAngle(deg2rad(270))();

console.log(d2);
</script>
<template>
  <svg width="300" height="300" class="border border-blue-500">
    <g transform="translate(150,150)">
      <path :d="d" stroke="black" fill="none" />
      <path :d="d2" stroke="red" fill="none" />
    </g>
  </svg>
</template>
