<template>
  <v-app-bar
    color="white"
  >
    <div class="menu">
      <div class="menu-element" v-for="link in menuLinks" :key="link.value">
        <router-link :to="link.value">{{link.text}}</router-link>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const menuLinks = [
      {
        text: 'Home',
        value: '/',
      },
      {
        text: 'Serpinsky triangle',
        value: '/serpinsky-triangle',
      },
    ];
    return {
      menuLinks,
    };
  },
});
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  &-element {
    font-size: 1.25rem;
    > a {
      padding: 2rem;
      color: rgb(90, 90, 90);
      text-decoration: none;
      transition: all 0.2s;
      &:hover {
        color: rgb(30, 30, 30);
        background-color: rgb(230, 230, 230);
      }
    }
  }
}

::v-deep {
  & .v-app-bar__content {
    height: 100%;
  }
}
</style>
