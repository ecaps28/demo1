<template>
  <div id="adduser">    
    <el-form accept-charset="utf-8" @submit.prevent="submitForm()">
      <el-form-item label="用户名">
        <el-input v-model="uname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="upw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="submit" @click="changename">提交</el-button>
        <el-button type="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations,mapGetters } from 'vuex'
import Vuex from 'vuex'

export default {
  data () {
    return {
      uname:'',
      upw:''
    }
  },
  computed: {
    ...mapState([
      'username'
    ])
  },
  methods:{
    submitForm(){
      
      let url='server.login'
      let param=new URLSearchParams()
      param.append('username',this.uname)
      param.append('password',this.upw)
      axios({
        methods:'post',
        url:url,
        data:param
      }).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      })
    },
    changename(){
      store.commit('setName',uname)
    },
    ...mapMutations({
      setName:'SET_NAME'
    })
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
</style>