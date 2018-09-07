<template>
  <div id="home">
    <h1>一个首页组件</h1>
    <el-button @click="goNews()">跳转到新闻页面</el-button>   
    <el-button @click="addn()">+</el-button>
    <h2>{{Num}}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: '一个home组件'
    }
  },
  computed: {
    ...mapState([
      'Num'
    ])
  },
  methods:{
    goNews(){
      //第一种跳转方式
      // this.$router.push({ path: 'news' })
      // this.$router.push({ path: '/content/495' });
      //另一种跳转方式
      //   { path: '/news', component: News,name:'news' },
      // router.push({ name: 'news', params: { userId: 123 }})
      this.$router.push({ name: 'News'})
    },
    ...mapMutations({
      addNum:'ADD_NUM'
    }),
    addn(){
      this.addNum();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
