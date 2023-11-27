<template>
  <h1>
    {{ msg }}
  </h1>
  <h2>{{ storeMsg }} / {{ storeMessage }}</h2>
  <HelloNew />
</template>

<script>
import HelloNew from '~/components/HelloNew'


export default {
   components: {
     HelloNew
   },
   data() {
    return {
      msg: 'Hello Vue!'
    }
   },
   computed: {
    storeMsg() {
      return this.$store.state.msg
    },
    storeMessage() {
      return this.$store.state.message.message
    }
   }
}
</script>

