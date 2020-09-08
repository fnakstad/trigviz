<script lang="ts">
  class Vertex {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  class Triangle {
    vertices: Vertex[];

    constructor(v1: Vertex, v2: Vertex, v3: Vertex) {
      this.vertices = [v1, v2, v3];
    }
  }

  const triangle = new Triangle(
    new Vertex(0, 0),
    new Vertex(0, 100),
    new Vertex(100, 100)
  );
</script>

<style>

</style>

<g>
  {#each triangle.vertices as { x, y }}
    <line x1={x} y1={y} x2="100" y2="20" stroke="black" />
  {/each}
</g>
