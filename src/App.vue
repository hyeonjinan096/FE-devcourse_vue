<template>
  <HelloNew
    v-bind="post" />
</template>

<!-- 
  v-bind="post"를 이용해 
  :id="post.id"
  :title="post.title" 생략 가능  -->

<script>
import HelloNew from '~/components/HelloNew'
export default {
   components: {
     HelloNew
   },
   data() {
    return {
      post: {
        id: 2,
        title: 'Hello Vue!'
      }
    }
   }
}
</script>

