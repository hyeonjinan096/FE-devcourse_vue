<template>
  <h1>Hello Vue!</h1>
  <!-- 전역 컴포넌트 -->
  <BtnNew /> 
  <!-- 지역 컴포넌트 -->
  <HelloNew />
</template>

<script>
import HelloNew from '~/components/HelloNew'
export default {
   components: {
     HelloNew
   }
}
</script>

