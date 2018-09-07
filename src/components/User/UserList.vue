<template>
  <div id="adduser">    
   <h2>添加列表</h2>
    <h2><input type="text"
    v-model="todo"
    placeholder="添加任务">
    <button @click="doAdd()">增加</button>
    </h2>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model='item.checked'>
        {{item.title}}---<button @click="removeData(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked">{{item.title}}---<button @click="removeData(key)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      todo: '',
      list: [
      {
        title:'eat',
        checked:false
      },
      {
        title:'learn',
        checked:false
      }
     ]
    }
  },
  methods: {
    doAdd(e){
      this.list.push({
            title: this.todo,
            checked: false
          })
          this.todo='';
      
    },
    removeData(key){
      // alert(key)
      //splice  js操作数组的方法
      this.list.splice(key,1);
    }
  }
}
</script>
<style>
h1 {
  font-weight: normal;
}

h2 {
  font-weight: normal;
  text-align:center;
}

ol {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  float:center;
}

</style>