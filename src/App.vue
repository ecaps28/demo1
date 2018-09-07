<template>
  <div id="app">
    <el-container>
      <el-header>
        <span class="welcome">欢迎{{username}}</span>
        <router-link to="/Home">首页</router-link>
        <router-link to="/News">新闻</router-link>
        <router-link to="/User/useradd">用户</router-link>
        <router-link to="/Test">测试</router-link>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data () { 
    return {
      msg:'你好vue'
    }
  },
  computed: {
    ...mapState([
      'username'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 150px;
}
.el-main {
background-color: #E9EEF3;
color: #333;
text-align: center;
line-height: 160px;
}
.welcome{
  text-align: left;
}
</style>
