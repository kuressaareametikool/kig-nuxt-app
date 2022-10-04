import { arc } from "d3";
export function deg2rad(deg: number = 0): number {
  return (deg * Math.PI) / 180;
}
export function rad2deg(rad: number = 0): number {
  return (rad * 180) / Math.PI;
}
export function polar(angle: number, radius: number): { x: number; y: number } {
  return {
    x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
    y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
  };
}

const hsl = (h, s, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;
