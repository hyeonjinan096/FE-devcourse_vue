<template>
  <h1>DocsId.vue</h1>
  <!-- 동적 파라미터 -->
  <h2>{{ $route.params.id }}</h2> 
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  }
}
</script>