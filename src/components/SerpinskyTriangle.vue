<template>
  <v-container class="container">
    <div class="settings">
      <p class="description">
        <template v-if="points.length < 3">Set 3 coordinates on canvas</template>
        <template v-else-if="points.length === 3 && !isDataFilled">
          Set start coordinate and see the magic
        </template>
        <template v-else>See the magic</template>
      </p>
      <div>
        <!-- <v-btn @click="start" :disabled="!isDataFilled" class="mr-2">Start</v-btn> -->
        <v-btn @click="clear" :disabled="!points.length">Clear</v-btn>
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
    const {
      canvas, context, fillPoint, clearCanvas,
    } = useCanvas();
    const {
      points, addPoint, isDataFilled, clearPoints,
    } = useSerpinskyTriangle(context);
    const { coordinates, onMousemove } = useMouseEvent();

    const onCanvasClick = () => {
      if (!isDataFilled.value) {
        fillPoint({ coordinates: coordinates.value, radius: 2 });
        addPoint(coordinates.value);
      }
    };

    const clear = () => {
      clearCanvas();
      clearPoints();
    };

    return {
      canvas,
      points,
      isDataFilled,
      onMousemove,
      onCanvasClick,
      clear,
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
  background: #eee;
}
</style>
