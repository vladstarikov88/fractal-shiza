<template>
  <v-app>
    <v-main>
      <app-bar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import AppBar from '@/components/core/AppBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    AppBar,
  },
});
</script>
