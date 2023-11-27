<template>
  <h1>Hello</h1>
  <div>{{ msg }}</div>
  <div>{{ count }}</div>
</template>

<script>
  export default {
    computed: {
      msg() {
        return this.$store.state.msg
      },
      count() {
        return this.$store.state.count
      }
    }
  }
</script>

<style scoped lang="scss">
$color: red;
h1{
  color: $color;
}
</style>