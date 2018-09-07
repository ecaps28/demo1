<template>
  <div class="news">
    <h1>一个新闻组件</h1>
    <h2>{{Num}}</h2>
    <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: '一个新闻组件',
      list:[]
    }
  },
  computed: {
    ...mapState([
      'Num'
    ])
  },
  methods:{
    requestData(){
      //jsonp请求的话  后台api接口要支持jsonp
      //var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      this.$http.jsonp(api).then((response)=>{
        console.log(response);
        //注意：用到this要注意this指向
        this.list=response.body.result;
      },
      function(err){
        console.log(err);
      })
    }
  },
  mounted(){
    this.requestData();
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
