<template>
  <div>
    <tabbar v-show="isShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// import Vue from 'vue'
// import child1 from '@/components/Child1'
// import child2 from './components/Child2'
import tabbar from '@/components/Tabbar'
import bus from '@/bus'
// Vue.component("child1",child1)
// 標準導出,這邊如同Vue.component("app",{}) === {}
export default {
  data () {
    return {
      isShow: true,
      datalist: []
    }
  },
  methods: {

  },
  components: {
    // child1:child1
    // child1, // es6 對象簡寫
    // child2
    tabbar
  },
  beforeMount () {
    // 監聽
    bus.$on('jason', (data) => {
      console.log('123')
      this.isShow = data
    })
  },
  mounted () {

  }
}
</script>

<style lang="scss">
  /*<!--全局樣式寫這-->*/
  /*li{*/
    /*list-style: none;*/
  /*}*/

  ul{
    li{
      list-style: none;
    }
  }

  *{
    margin: 0;
    padding: 0;
  }

  section{
    margin-bottom: 50px;
  }
</style>
