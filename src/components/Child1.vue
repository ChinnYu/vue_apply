<template>
    <div>child1--{{myname}}
    <slot></slot>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['myname'],
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res.data)
    })
    axios.get('/json/test.json').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss">
    div{
        background: yellow;
    }
</style>
