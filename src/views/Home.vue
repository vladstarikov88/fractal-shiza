<template>
  <div class="home">
    <Example />
  </div>
</template>

<script lang="ts">
import Example from '@/components/Example.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Example,
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
