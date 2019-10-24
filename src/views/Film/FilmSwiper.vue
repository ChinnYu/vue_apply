<template>
    <div class="swiper-container jason" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'FilmSwiper',
  mounted () { // slot也走update
    new Swiper('.jason', {
      // direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }

    })
  }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>
