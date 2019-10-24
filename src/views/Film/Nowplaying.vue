<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster">
                <h3>{{data.name}}</h3>
                <p>主演: {{data.actors | actorsfilter}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import '@/filters/ActorsFilter'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleClick (id) {
      // 跳轉路由--編程式導航-路徑跳轉
      // this.$router.push(`/detail/${id}`);//法一
      // 名子跳轉
      this.$router.push({ name: 'detail', params: { id: id } })// 法二
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8637490',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157117990821178483736796"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  }

}
</script>

<style lang="scss" scoped>
    li{
        overflow: hidden;
        img{
            width: 100px;
            float: left;
        }
    }
</style>
