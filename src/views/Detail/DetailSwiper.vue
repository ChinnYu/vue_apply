<template>
    <div :class="'swiper-container '+swipername " >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'DetailSwiper',
  mounted () { // slot也走update
    new Swiper('.' + this.swipername, {
      slidesPerView: this.perview,
      spaceBetween: 5,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination'
      }

    })
  },
  props: ['perview', 'swipername']
}
</script>

<style scoped>

</style>
