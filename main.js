import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todo: [1,3,5,7,9]
  },
  mutations: {
    increment: (state,payload) => state.count += payload.num,
    // decrement: (state,payload) => state.count -= payload.num 

    // 异步情况下devtools追踪不到状态，如下
    decrement: (state,payload) => state.count -= payload.num,
    decrementOneCount: (state,payload) => state.count -= payload.count
  },
  getters: {
    // 也可以适用第二个参数调用自己对象中的属性
    islarge: (state,getters) => {
      return state.count > 5 ? 'yes' : 'no'
    },
    // 两个箭头函数相当于扩充了一个外层作用域
    // 引用getter的值并不是一个执行函数，而是引用他的定义方式(估计是内部先被执行了)
    // 因此可以下面这样写
    hasTargetInAll: (state) => (id) => {
      return state.todo.find(id)
    }
  },
  actions: {
    decrementAsync({commit},payload) {
      setTimeout(() => {
        commit('decrementOneCount',payload)
      }, 2000);
    }
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
