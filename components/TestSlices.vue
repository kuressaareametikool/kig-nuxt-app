<script setup>
const {
  options,
  inner = 0,
  outer = 100,
  corner = 0,
  padding = 0,
} = defineProps(["options", "inner", "outer", "corner", "padding"]);
defineEmits(["select"]);

const sectors = options.map((option, i) => {
  const count = options.length;
  const sector = 360 / count;
  const currentAngle = i * sector;
  const sectorMiddleRadius = inner + (outer - inner) / 2;

  const d = arcPath(
    currentAngle,
    currentAngle + sector,
    inner,
    outer,
    corner,
    padding
  );
  const point = polar(currentAngle + sector / 2, sectorMiddleRadius);
  const fill = hsl(currentAngle, 100, 50);
  const flip = currentAngle >= 90 && currentAngle < 270;
  const transform = [
    rotate(currentAngle + sector / 2 - 90),
    translate(sectorMiddleRadius, 0),
    scale(flip ? -1 : 1, flip ? -1 : 1),
  ].join();
  return { ...option, d, point, fill, transform, flip, currentAngle };
});
</script>
<template>
  <g class="rotate(90)">
    <g v-for="(sector, i) in sectors">
      <path
        :d="sector.d"
        :fill="sector.fill"
        opacity="0.5"
        @click="$emit('select', sector)"
      />
      <!-- <text
        style="pointer-events: none"
        dominant-baseline="middle"
        text-anchor="middle"
        :transform="sector.transform"
      >
        {{ sector.title }}
      </text> -->
      <!-- <circle
        :cx="sector.point.x"
        :cy="sector.point.y"
        r="20"
        fill="none"
        stroke="black"
        opacity="0.1"
      /> -->
    </g>
    <g v-for="sector in sectors">
      <image
        v-if="sector.icon"
        :x="sector.point.x"
        :y="sector.point.y"
        :href="sector.icon"
        :transform-origin="sector.point.x + ' ' + sector.point.y"
        transform="scale(1.5) translate(-8,-8)"
      />
      <text
        v-else
        style="pointer-events: none"
        dominant-baseline="middle"
        text-anchor="middle"
        :transform="sector.transform"
      >
        {{ sector.title }}
      </text>
    </g>
  </g>
</template>
