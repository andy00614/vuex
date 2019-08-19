<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
    })
  }
}
</script>