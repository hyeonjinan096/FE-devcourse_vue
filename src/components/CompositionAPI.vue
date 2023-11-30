<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
//반응형 데이터 만들기 2두가지 방법 : ref, reactive
// reactive는 배열, 객체와 같은 참조형 데이터만 가능하다.
// const userName = ref('Heropy');
const user = reactive({
  name: 'Heropy',
  age: 85,
});

watch(
  user,
  (newVal) => {
    console.log(newVal);
  },
);

console.log(user.name, user.age);
</script>

<template>
  <input v-model="user.name" />
  <h1>{{ user.name }}</h1>
</template>
