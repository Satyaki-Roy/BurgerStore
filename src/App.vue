<template>
  <div id="app">
    <OrderBurger />
  </div>
</template>

<script>
import OrderBurger from './components/OrderBurger.vue'

export default {
  name: 'App',
  components: {
    OrderBurger
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
