<template>
    <div>Center
        <span>影院</span>
        <i class="icofont icofont-cart"></i>
    </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    // 在渲染該組件的對應路由被 confirm 前調用
    // 不！能！獲取元件實例 `this`
    // 因為當守衛執行前，元件實例還沒被創建
    if (true) {
      next()
    } else {
      next('/login')
    }
  }

}
</script>
