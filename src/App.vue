<template>
  <div id="app">
    <lf-button>Botão</lf-button>
  </div>
</template>

<script>
import { LfButton } from '@/components/button';

export default {
  name: 'App',
  components: {
    LfButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
