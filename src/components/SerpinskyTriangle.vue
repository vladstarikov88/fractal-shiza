<template>
  <v-container class="container">
    <div class="settings">
      <p class="description">
        <template v-if="points.length < 3">Set 3 coordinates on canvas</template>
        <template v-else-if="points.length === 3 && !isDataFilled">Set start coordinate</template>
        <template v-else>See the magic</template>
      </p>
      <div>
        <v-btn @click="start" :disabled="!isDataFilled" class="mr-2">Start</v-btn>
        <!-- <v-btn @click="clear" :disabled="isDataFilled">Clear</v-btn> -->
      </div>
    </div>
    <canvas
      id="canvas"
      ref="canvas"
      width="700"
      height="700"
      @click="onCanvasClick"
      @mousemove="onMousemove"
    />
  </v-container>
</template>

<script>
import {
  defineComponent,
} from 'vue';
import useCanvas from '@/composables/useCanvas';
import useSerpinskyTriangle from '@/composables/useSerpinskyTriangle';
import useMouseEvent from '@/composables/useMouseEvent';

export default defineComponent({
  name: 'App',
  setup() {
    const { canvas, context, fillPoint } = useCanvas();
    const {
      points, addPoint, isDataFilled, drawPoints,
    } = useSerpinskyTriangle(context);
    const { coordinates, onMousemove } = useMouseEvent();

    const onCanvasClick = () => {
      if (!isDataFilled.value) {
        fillPoint({ coordinates: coordinates.value, radius: 2 });
        addPoint(coordinates.value);
      }
    };

    const start = () => {
      drawPoints();
    };

    const clear = () => {

    };

    return {
      canvas,
      points,
      isDataFilled,
      start,
      onMousemove,
      onCanvasClick,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.settings {
  width: 700px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.description {
  font-size: 2rem;
  padding-bottom: 1rem;
}

#canvas {
  border: 1px solid rgb(145, 145, 145);
}
</style>
