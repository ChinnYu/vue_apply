import Vue from 'vue'
Vue.filter('actorsfilter', (data) => {
  if (!data) {
    return '暫無主演'
  }
  var result = data.map(item => item.name)
  // console.log(result);
  return result.join(' ')
})
