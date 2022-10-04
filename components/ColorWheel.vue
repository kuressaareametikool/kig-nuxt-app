<script setup>
import { arc } from "d3";

const { options } = defineProps(["options"]);
defineEmits(["select"]);

const rotate = (deg) => `rotate(${deg})`;
const translate = (x, y) => `translate(${x} ${y})`;

const sectors = options.map((option, i) => {
  const count = options.length;
  const sector = 360 / count;
  const currentAngle = i * sector;
  const d = arc()
    .padAngle(0)
    .cornerRadius(0)
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(deg2rad(currentAngle))
    .endAngle(deg2rad(currentAngle + sector))();
  const halfSector = currentAngle + sector / 2;
  const point = polar(halfSector, 50 + (100 - 50) / 2);
  return { ...option, d, point, halfSector };
});
</script>
<template>
  <div>
    <svg width="300" height="300" class="block border border-blue-500">
      <g transform="translate(150,150)">
        <g v-for="sector in sectors" @click="$emit('select', sector)">
          <path :d="sector.d" :fill="sector.fill" opacity="0.5" />
          <!-- <circle :cx="sector.point.x" :cy="sector.point.y" r="2" /> -->
          <text
            dominant-baseline="middle"
            text-anchor="middle"
            :transform="
              [rotate(sector.halfSector * -1), translate(60, 0)].join()
            "
          >
            {{ sector.title }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>
