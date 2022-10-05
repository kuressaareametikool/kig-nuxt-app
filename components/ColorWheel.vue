<script setup>
import { arc } from "d3";

const { options } = defineProps(["options"]);
defineEmits(["select"]);

const translate = (x, y) => `translate(${x} ${y})`;
const rotate = (deg) => `rotate(${deg})`;
const scale = (s) => `scale(${s})`;
const arcPath = (start, stop) =>
  arc()
    .padAngle(0)
    .cornerRadius(0)
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(deg2rad(start))
    .endAngle(deg2rad(stop))();

const arcPath2 = (start, stop) =>
  arc()
    .padAngle(0)
    .cornerRadius(0)
    .innerRadius(100)
    .outerRadius(200)
    .startAngle(deg2rad(start))
    .endAngle(deg2rad(stop))();

const sectors = options.map((option, i) => {
  const count = options.length;
  const sector = 360 / count;
  const currentAngle = i * sector;
  const d = arcPath(currentAngle, currentAngle + sector);
  const halfSector = currentAngle + sector / 2;
  const point = polar(halfSector, 50 + (100 - 50) / 2);
  const o = (option.options || []).map((o2, i) => {
    const sector2 = sector / option.options.length;
    const d = arcPath2(currentAngle, currentAngle + sector2 * i);
    return { ...o2, d, fill: hsl(sector2, 100, 50) };
  });
  return { ...option, d, point, halfSector, currentAngle, sector, o };
});
</script>
<template>
  <div>
    <svg width="500" height="500" class="block border border-blue-500">
      <g transform="translate(250,250)">
        <g v-for="sector in sectors" @click="$emit('select', sector)">
          <path :d="sector.d" :fill="sector.fill" opacity="0.5" />
          <!-- <circle :cx="sector.point.x" :cy="sector.point.y" r="2" /> -->
          <text
            style="pointer-events: none"
            dominant-baseline="middle"
            text-anchor="middle"
            :transform="
              [rotate(sector.halfSector * -1), translate(60, 0)].join()
            "
          >
            {{ sector.title }}
          </text>
          <g v-for="(sector2, s) in sector.o || []">
            <path :d="sector2.d" :fill="sector2.fill || 'red'" opacity="0.5" />
            <text
              style="pointer-events: none"
              dominant-baseline="middle"
              :transform="
                [
                  rotate(sector.currentAngle + s * 10 + 10),
                  translate(120, 0),
                ].join()
              "
            >
              {{ sector2.title }}
            </text>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>
