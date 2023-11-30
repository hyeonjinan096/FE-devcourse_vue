<script setup lang="ts">
import { ref, onMounted } from 'vue';
const number = ref(0);
console.log('Created!')
onMounted(()=> {
    console.log('Mounted')
})


function increase() {
  number.value += 1;
}
</script>

<template>
  <h1 @click ="increase">{{ number }}</h1>
</template>
