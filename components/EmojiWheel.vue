<script setup>
import { arc } from "d3";

const { options } = defineProps(["options"]);
defineEmits(["select"]);

const sectors = options.map((option, i) => {
  const count = options.length;
  const sector = 360 / count;
  const currentAngle = i * sector;
  const d = arc()
    .padAngle(deg2rad(2))
    .cornerRadius(10)
    .innerRadius(50)
    .outerRadius(100)
    .startAngle(deg2rad(currentAngle))
    .endAngle(deg2rad(currentAngle + sector))();
  const point = polar(currentAngle + sector / 2, 50 + (100 - 50) / 2);
  return { ...option, d, point };
});
</script>
<template>
  <div>
    <svg width="300" height="300" class="block border border-blue-500">
      <g transform="translate(150,150)">
        <g v-for="sector in sectors" @click="$emit('select', sector)">
          <path :d="sector.d" :fill="sector.fill" stroke="black" />
          <!-- <circle :cx="sector.point.x" :cy="sector.point.y" r="2" /> -->
          <image
            :x="sector.point.x"
            :y="sector.point.y"
            :href="sector.icon"
            :transform-origin="sector.point.x + ' ' + sector.point.y"
            transform="scale(1.5) translate(-8,-8)"
          />
          <text :x="sector.point.x" :y="sector.point.y">
            {{ sector.title }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>
