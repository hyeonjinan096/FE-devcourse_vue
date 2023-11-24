<template>
  <h1>
    {{ msg }}
  </h1>
  <HelloNew
    class="hello"
    style="font-size: 100px;"
    @click="msg +='!'" />
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
   }
}
</script>

