<script lang="ts">
  import { Line, Angle } from "./models";
  import AngleIndicator from "./Angleindicator.svelte";

  // TODO: import this from models instead
  interface Vertex {
    x: number;
    y: number;
  }

  const vertices: Vertex[] = [
    { x: 0, y: 0 },
    { x: 0, y: 200 },
    { x: 300, y: 250 },
  ];

  // TODO: Make sure no lines are 0 in length...
  //         => make sure all 3 points not on same line
  const lines: Line[] = vertices.map((v, i, arr) => {
    const nexti: number = i < arr.length - 1 ? i + 1 : 0;
    return new Line({ x: v.x, y: v.y }, { x: arr[nexti].x, y: arr[nexti].y });
  });

  const angles: Angle[] = lines.map((l, i, arr) => {
    // Find angle opposite current line
    // using law of cosines (https://www.mathsisfun.com/algebra/trig-cosine-law.html)
    // c^2 = a^2 + b^2 − 2ab cos(C)
    // => C = acos( (a^2+b^2-c^2) / 2*a*b )

    const ai: number = i < arr.length - 1 ? i + 1 : 0;
    const bi: number = ai < arr.length - 1 ? ai + 1 : 0;

    // const a = arr[ai].length();
    // const b = arr[bi].length();
    // const c = l.length();

    // return Math.acos(
    //   (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)
    // );

    return new Angle(arr[ai], arr[bi]);
  });

  //$: const lines: number[] = vertices.map(v => v.x);
</script>

<style>

</style>

<svg viewBox="0 0 350 350">
  <g>
    {#each lines as { p1, p2 }}
      <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="black" />
    {/each}

    <!-- {#each angles as a}
      <AngleIndicator angle={a} />
    {/each} -->
  </g>
</svg>
