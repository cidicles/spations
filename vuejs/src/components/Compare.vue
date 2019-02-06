<template>
  <div>
    <h1>
      <span
        v-for="(letter, i) in splits"
        :key="`letter-${i}`"
        :class="{'red' : i === redIndex}"
      >
        {{ letter }}
      </span>
    </h1>
    <input v-model="dataDothesplits" class="input input--copy">
  </div>
</template>

<script>
export default {
  name: 'Compare',
  props: {
    dothesplits: String
  },
  data: function () {
    return {
      redIndex: 2,
      dataDothesplits: this.dothesplits
    }
  },
  methods: {
    setIndex(property){
      return {
        'fa-checkbox-marked': this.content[property],
        'fa-checkbox-blank-outline': !this.content[property]
      }
    }
  },
  computed: {
    splits: function () {
      return this.dataDothesplits.split('');
    },
  }
}
</script>

<style lang='sass' scoped>
h1
  font-size: calc(5vw + 1rem)
  text-align: center
  span
    @for $i from 1 through 30
      &:nth-child(#{$i})
        animation: rise-1 #{(random(4) + 2) + s} infinite linear
        animation-delay: #{random(5) + s}

.red
  color: #f00

.input
  position: absolute
  left: 50%
  transform: translateX(-50%)
  font-size: 2rem
  border: none
  padding: 0.5rem
  text-align: center
  outline: none

.input--copy
  bottom: 0
  border-radius: 1rem 1rem 0 0

.input--index
  top: 0
  border-radius: 0 0 1rem 1rem

@keyframes rise-1
  0%
    opacity: 1
  50%
    opacity: 0.1
  100%
    opacity: 1

</style>
