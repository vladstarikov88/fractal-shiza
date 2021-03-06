import useCanvas from '@/composables/useCanvas';
import { getRandomIntInclusive } from '@/helpers';
import { computed, ref } from 'vue';

export default function ususeSerpinskyTriangleeCanvas(context) {
  const { fillPoint } = useCanvas(context);
  const points = ref([]);
  const startPoint = ref({});
  const isDataFilled = computed(
    () => points.value.length === 3 && Object.keys(startPoint.value).length,
  );

  let drawProcessing = null;
  const drawPoints = () => {
    drawProcessing = setInterval(() => {
      const ramdomValue = getRandomIntInclusive(1, points.value.length);
      const findPoint = points.value
        .find((el, index) => index + 1 === ramdomValue);

      const middlePoint = {
        x: Math.abs((startPoint.value.x + findPoint.x) / 2),
        y: Math.abs((startPoint.value.y + findPoint.y) / 2),
      };

      fillPoint({ coordinates: middlePoint });

      startPoint.value.x = middlePoint.x;
      startPoint.value.y = middlePoint.y;
    }, 1);
  };

  const addPoint = (coordinates) => {
    if (points.value.length < 3) {
      points.value.push(coordinates);
    } else {
      startPoint.value = coordinates;
      drawPoints();
    }
  };

  const clearPoints = () => {
    points.value = [];
    startPoint.value = {};
    clearInterval(drawProcessing);
  };

  return {
    points,
    addPoint,
    isDataFilled,
    clearPoints,
  };
}
