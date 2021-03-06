import { ref, computed } from 'vue';

export default function useCanvas(initialContext) {
  const canvas = ref(null);
  const context = initialContext || computed(() => canvas.value.getContext('2d'));

  const fillPoint = ({ coordinates, radius = 1 }) => {
    context.value.beginPath();
    context.value.moveTo(coordinates.x + radius, coordinates.y);
    context.value.arc(coordinates.x, coordinates.y, radius, 0, Math.PI * 2, true);
    context.value.stroke();
  };

  const clearCanvas = () => {
    context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  };

  return {
    canvas,
    context,
    fillPoint,
    clearCanvas,
  };
}
