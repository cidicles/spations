<template>
  <div id="app">
    <Compare dothesplits="Vue is the Best"/>
  </div>
</template>

<script>
import Compare from './components/Compare.vue'

export default {
  name: 'app',
  components: {
    Compare
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');

body
  font-size: 16px
  font-family: 'ZCOOL KuaiLe', cursive
  margin: 0
  padding: 0
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background: #3eb985
  color: #34495d
</style>
