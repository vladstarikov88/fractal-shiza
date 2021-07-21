<template>
  <div>
    <canvas id="canvas" width="700" height="700"/>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { getRandomIntInclusive, fillPoint } from '@/helpers';

export default defineComponent({
  name: 'App',
  setup(props, context) {
    onMounted(() => {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      const POINT_A = { x: 0, y: 700, i: 1 };
      const POINT_B = { x: 700, y: 700, i: 2 };
      const POINT_C = { x: 700, y: 0, i: 3 };

      const POINTS = [POINT_A, POINT_B, POINT_C];

      const randomPoint = { x: 50, y: 500 };

      setInterval(() => {
        const ramdomValue = getRandomIntInclusive(1, POINTS.length);
        const findPoint = POINTS
          .find(({ i }) => i === ramdomValue);

        const middlePoint = {
          x: Math.abs((randomPoint.x + findPoint.x) / 2),
          y: Math.abs((randomPoint.y + findPoint.y) / 2),
        };

        ctx.beginPath();
        fillPoint({
          ctx,
          coords: middlePoint,
          radius: 1,
        });
        ctx.stroke();

        randomPoint.x = middlePoint.x;
        randomPoint.y = middlePoint.y;
      }, 0.001);
    });

    return {};
  },
});
</script>

<style scoped lang="scss">
#canvas {
  width: 60rem;
  height: 60rem;
  width: 100%;
  height: 100%;
  outline: 1px solid black;
}
</style>
