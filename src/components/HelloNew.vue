<template>
  <h1 
  v-bind="$attrs">
    Hello
  </h1>
  <h2>
    haha
  </h2>
</template>
<!-- 
  h1, h2 최상위 요소가 여러개 일 경우에는 HelloNew에 부여한 속성이 어디에
  부여되어야하는지가 정해지지 않는다. 

  최상위 요소가 h1으로 하나일 경우에는 attrs를 사용하지 않고 바로 적용될 수 있다. 
  <h1>Hello</h1> -> 바로 적용
  이걸 원하지 않을 경우 inheritAttrs: false로 바로 적용되는 것을 막을 수 있다. 

  :class="$attrs.class"
  $: vue.js에서 제공하는 기본 속성
  :: 데이터이기 때문에 앞에 명시

  attrs: attributes 컴포넌트가 가지고 있는 속성 (non-prop속성)
  (주의)props를 통해 지정되지 않은 나머지 속성 객체를 의미함 

  :class="$attrs.class"
  :style="$attrs.style"
  @click="$attrs.onClick"
  -> v-bind="$attrs"로 작성이 가능하다


 -->

 <script>
export default {
  inheritAttrs: false,
  props: {
    style: Object
  },
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<style scoped lang="scss">
$color: orange;
h1 {
    color: $color
}
</style>
