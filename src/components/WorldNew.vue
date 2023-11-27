<template>
  <h1>World.vue</h1>
  <div>{{ reveresedMsg }}</div>
  <div @click="decreaseCount">
    {{ count }}
  </div>
</template>

<script>
  import {state,getters,mutations} from '~/store'

  export default {
    data() {
      return state
    },
    computed: {
      reveresedMsg: getters.reversedMsg,
    },
    methods : {
      decreaseCount: mutations.decreaseCount
    }
  }
</script>