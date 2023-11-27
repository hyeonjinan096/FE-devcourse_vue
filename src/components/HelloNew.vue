<template>
  <h1>Hello.vue</h1>
  <div>{{ msg }}</div>
  <div @click="increaseCount">
    {{ count }}
  </div>
  <button @click="fetchTodo">
    Get Todo!
  </button>
</template>

<script>
  import {state,mutations, actions} from '~/store' //stroe/index.js  확장자 생략, index생략 가능
  export default {
    data() {
      return state
    },
    methods : {
      increaseCount: mutations.increaseCount,
      fetchTodo: actions.fetchTodo
    }
  }
</script>

<style scoped lang="scss">
  $color: red;
  h1 {
    color: $color;
  }
</style>