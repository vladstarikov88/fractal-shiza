<template>
  <div class="home">
    <serpinsky-triangle />
  </div>
</template>

<script lang="ts">
import SerpinskyTriangle from '@/components/SerpinskyTriangle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    SerpinskyTriangle,
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
