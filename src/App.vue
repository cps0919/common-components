<template>
  <direction-control @direction="directionClick" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const directionClick = (e: { mouse: string; direction: number }) => {
      console.log(e);
    };
    return {
      directionClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
#app,
html,
body {
  height: 100%;
  width: 100%;
}
</style>
