<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about?name=Leon&age=85&email=leon@abc.com">
    About
  </RouterLink>
  <!-- v-bind(:) : 속성에 데이터 입력할때 지정 -->
  <RouterLink :to="{name: 'docsId',params: {id: '7777'}, query: {name: 'Leon', age: 85, email:'leon@abc.com'}}">
    Documents ID
  </RouterLink>
  <button @click="$router.push({name: 'home'})">
    Home
  </button>
  <button @click="$router.push('/about')">
    About
  </button>
  <RouterView />
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello Vue!'
        }
    }
}
</script>

