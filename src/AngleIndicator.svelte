<script lang="ts">
  import type { Angle } from "./models";

  // TODO: import this from models instead
  interface Vertex {
    x: number;
    y: number;
  }

  export let angle: Angle;

  // Calculate polyline coords from given angle
  // angle.l1;
</script>

<style>

</style>

<g>
  <line x1={angle.l1.p1.x} y1={angle.l1.p1.y} x2="50" y2="50" stroke="red" />
  <!-- <text x={angle.v.x} y={angle.v.y}>{angle.radians}</text> -->
</g>
