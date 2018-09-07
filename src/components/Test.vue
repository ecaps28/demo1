<template>
  <div id="test">
    <h1>一个用于测试的组件</h1>
    
    <my-component>
      <template scope="props">
        <p>来自父组件的内容</p>
        <p>{{props.msg}}</p>
      </template>
    </my-component>
    <h2>----</h2>
    
  </div>
</template>

<script>
import testCom from '@/components/testCom'
import { Modal, Button } from 'antd';
export default {
  components:{
    'my-component':testCom  
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
