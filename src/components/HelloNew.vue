<template>
  <h1 @click="updateMessage">
    {{ newMessage }}
  </h1>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  props: {
    message: String,
    name: [String,Number]
  },  //여기서 methods로 message데이터 자체 변경은 불가능 하위 -> 상위 흐름 X
  data() {
    return { //단순히 받기만 하고 새로운 데이터 형태는 변경은 가능 
      newMessage: this.message 
    }
  },
  methods: {
    updateMessage() {
      this.newMessage = 'Good~'
    }
  }
}
</script>

<style scoped lang="scss">
$color: orange;
h1 {
    color: $color
}
</style>

<!-- 
scoped: 하위 컴포넌트의 스타일이 상위컴포넌트에 영향을 미치는 것을 방지한다.  
해당 컴포넌트에만 스타일 해쉬가 추가된다.
-->