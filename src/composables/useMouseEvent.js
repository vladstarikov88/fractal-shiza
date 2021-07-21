import { computed, ref } from 'vue';

export default function useMouseEvent() {
  const mouseX = ref(null);
  const mouseY = ref(null);
  const coordinates = computed(() => ({
    x: mouseX.value,
    y: mouseY.value,
  }));

  const onMousemove = (event) => {
    mouseX.value = event.offsetX;
    mouseY.value = event.offsetY;
  };

  return {
    coordinates,
    onMousemove,
  };
}
