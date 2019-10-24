<template>
    <div v-if="filminfo">
        <img :src="filminfo.poster" class="poster"/>
        <h2>{{filminfo.name}}</h2>

        <h3>演出人員</h3>
        <detailswiper perview="3" swipername="detail_actor">
            <div class="swiper-slide" v-for="(item,index) in filminfo.actors" :key="index">
                <img :src="item.avatarAddress"/>
            </div>
        </detailswiper>

        <h3>劇照</h3>
        <detailswiper perview="2" swipername="detail_photos">
            <div class="swiper-slide" v-for="(item,index) in filminfo.photos" :key="index">
                <img :src="item" class="mov"/>
            </div>
        </detailswiper>
    </div>
</template>

<script>
import axios from 'axios'
import bus from '@/bus'
import detailswiper from './Detail/DetailSwiper'
export default {
  name: 'Detail',
  data () {
    return {
      filminfo: null
    }
  },
  mounted () {
    // 獲取路由
    // console.log(this.$route.params.id)
    // 隱藏底部選項卡
    bus.$emit('jason', false)
    // ajax請求
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=3423432`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157117990821178483736796"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  components: {
    detailswiper
  },
  beforeDestroy () {
    // 顯示底部選項卡
    bus.$emit('jason', false)
  }
}
</script>

<style scoped>
    .poster{
        width: 100%;
    }
    .mov{
        width: 50%;
    }
</style>
