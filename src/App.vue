<template>
  <h1>
    {{ msg }}
  </h1>
  <HelloNew />
  <button @click="increaseCount">
    Increase!
  </button>  
  <WorldNew />
  <button @click="fetchTodo">
    Update Msg!
  </button>
</template>

<script>
import HelloNew from '~/components/HelloNew'
import WorldNew from '~/components/WorldNew'

export default {
   components: {
     HelloNew,
     WorldNew
   },
   data() {
    return {
      msg: 'Hello Vue!'
    }
   },
   methods: {
    increaseCount() {
      this.$store.commit('increaseCount')
    },
    fetchTodo() {
      this.$store.dispatch('fetchTodo')
    }
   }
}
</script>

