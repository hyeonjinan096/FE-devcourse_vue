<template>
  <h1>{{ id }} / {{ title }} / {{ email }}</h1>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    email: {
      type: String,
      default: 'abc.com'   //기본값 지정
    }
  }
}
//(주의)
//객체나 배열과 같은 참조형 데이터들은 함수형으로 return 해줘야한다. 
//할당되어 주소가 동일해져 의도치 않은 수정이 발생할 수 있기 때문이다.
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