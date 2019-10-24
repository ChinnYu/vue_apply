<template>
    <div class="cinema_container" :style="{height:cinameheight}">
        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                {{data.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      datalist: [],
      cinameheight: 0
    }
  },
  mounted () {
    this.cinameheight = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1878584',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157117990821178483736796"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data);
      this.datalist = res.data.data.cinemas
      this.$nextTick(() => {
        var myscroll = new BetterScroll('.cinema_container', {
          scrollbar: {
            fade: true,
            interactive: false
          },
          pullUpLoad: {
            threshold: 50
          }
        })
        myscroll.on('pullingUp', () => {
          console.log('到底了')
          this.datalist.push({
            cinemaId: '25456645565',
            name: 'jason'
          })
          myscroll.refresh()
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
    li{
        height: 50px;
    }
    .cinema_container{
        overflow: hidden;
        position: relative;
    }
</style>
