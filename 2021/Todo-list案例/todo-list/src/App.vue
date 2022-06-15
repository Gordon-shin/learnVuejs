<template>
  <div id="root">
    <AppTop  :addTodo="addTodo"/>
    <AppList
        :todos="todos"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
        />

    <AppFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllDoneTodo="clearAllDoneTodo"
    />
  </div>

</template>

<script>
import AppTop from './components/AppTop.vue'
import AppList from './components/AppList.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppTop,
    AppList,
    AppFooter
  },
  data(){
    return{
      todos: [
        {id: '001', title: '吃饭', done: false},
        {id: '002', title: "睡觉", done: true},
        {id: '003', title: '打代码', done: false}
      ]
    }
  },
  methods:{
    //添加的todo
    addTodo(todo){
      console.log('我是app组件，我收到了数据');
      this.todos.unshift(todo);
    },
    checkTodo(id){
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done);
    },
    clearAllDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  }

}
</script>

<style>

</style>
