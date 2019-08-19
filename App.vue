<template>
  <div>
    <h1>{{count}}</h1>
    <div>isLarge:{{isLarge}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this.$store.getters.islarge)
  },
  methods: {
    increment() {
      this.$store.commit('increment',{num:3})

    },
    decrement() {
      // 另一种写法
      // type,num都会作为一个对象传进去
      this.$store.commit({
        type: 'decrement',
        num:3
      })
    }
  },
  computed: {
    isLarge() {
      return this.$store.getters.islarge
    },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
    }),
  }
}
</script>