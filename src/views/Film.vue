<template>
    <div>
        <!--:key="datalist.length 用來防止過早加載-->
        <filmeswiper :key="datalist.length" ref="filmswiper">
            <div class="swiper-slide" v-for="data in datalist" :key="data.bannerId">
                <img :src="data.imgUrl">
            </div>
        </filmeswiper>
        <filmnav :class="isFixed?'fixed':''"></filmnav>
        <div>
            <!--路由容器-->
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import filmnav from './Film/FilmHeader'
import filmeswiper from './Film/FilmSwiper'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      isFixed: false
    }
  },
  components: {
    filmnav,
    filmeswiper
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=440300&k=8789408',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157117990821178483736796"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data
    })

    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
      // console.log(this.$refs.filmswiper.$el.offsetHeight);
      if (document.documentElement.scrollTop > this.$refs.filmswiper.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  destroyed () {
    window.onscroll = null
  }
}
</script>
