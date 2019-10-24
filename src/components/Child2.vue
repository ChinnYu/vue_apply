<template>
    <div>child2
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分頁器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要導航按鈕 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要捲軸 -->
            <div class="swiper-scrollbar"></div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import Swiper from 'swiper' // js模塊
import 'swiper/css/swiper.css' // css模快
export default {
  mounted () {
    new Swiper('.swiper-container', {
      // direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    div{
        background: red;
    }
    .swiper-container {
        width: 600px;
        height: 300px;
    }
</style>
