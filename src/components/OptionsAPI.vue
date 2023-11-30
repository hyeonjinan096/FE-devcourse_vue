<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    double : {
      //Getter
      get() {
        return this.number * 2;
      },
      //Setter
      set(newVal:number) {
        this.number = newVal / 2
      }
    },
  },
  watch: {
    count(newVal, oldVal){
      console.log('number: ', newVal, oldVal)
    }
  },
  methods: {
    increase() {
      this.number+=1
    },
    assign() {
      this.double = 0
    }
  }
});
</script>

<template>
  <button @click="increase">Increase</button>
  <button @click="assign">Assign</button>
  <h1>{{ number }}</h1>
  <h2>{{ double }}</h2>
</template>
