<template>
  <button @Click="reverseMsg">
    Click!
  </button>
  <HelloNew
    :message="msg"
    name="ss" />
</template>

<script>
import HelloNew from '~/components/HelloNew'
export default {
   components: {
     HelloNew
   },
   data() {
    return {msg: 'Hello Vue!'}
   },
   methods: {
    reverseMsg() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
    }
   }
}
</script>

