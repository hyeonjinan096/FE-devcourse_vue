<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const number = ref(0);

const double = computed({
  get() {
    return number.value * 2;
  },
  set(newVal: number) {
    number.value = newVal / 2;
  },
});

watch(number, (newVal, oldVal) => {
  console.log('number: ', newVal, oldVal)
})

const increase = () => {
  number.value += 1;
};
const assign = () => {
  double.value = 8
}
</script>

<template>
  <button @click="increase">Increase</button>
  <button @click="assign">Assign</button>
  <h1>{{ number }}</h1>
  <h2>{{ double }}</h2>
</template>
