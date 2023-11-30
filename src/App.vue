<script setup lang="ts">
import { useNumberStore } from './store/number';
const numberStore = useNumberStore();
</script>

<template>
  <h1>{{ numberStore.number }}</h1>
  <h1>{{ numberStore.double }}</h1>
  <button @click="numberStore.increase">Increase</button>
  <button @click="numberStore.decrease">Decrease</button>
</template>
