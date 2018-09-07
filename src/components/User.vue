<template>
  <div id="user">
    <el-container>    
      <el-aside width="200px">
      <el-row>
        <router-link to="/User/UserAdd">用户登录</router-link>
      </el-row>
      <el-row>
        <router-link to="/User/UserList">列表</router-link>
      </el-row>
      </el-aside>
      <el-main>    
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: '一个user组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
