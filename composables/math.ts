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

// export function arcpath(
//   startAngle: number,
//   endAngle: number,
//   innerRadius: number,
//   outerRadius: number,
//   cornerRadius: number
// ): string | null {
//   //@ts-ignore
//   const args = {
//     startAngle: deg2rad(startAngle),
//     endAngle: deg2rad(endAngle),
//     innerRadius,
//     outerRadius,
//     cornerRadius,
//   };
//   console.log(
//     arc({
//       innerRadius: 0,
//       outerRadius: 100,
//       startAngle: 0,
//       endAngle: Math.PI / 2,
//     })()
//   );
//   //const path = arc(args)();
//   return "";
// }
