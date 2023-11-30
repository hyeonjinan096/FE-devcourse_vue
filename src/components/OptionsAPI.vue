<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log('Created!')
  },
  mounted() {
    console.log('Mounted!')
  },
  methods: {
    increase() {
        this.count+=1
    }
  }
  }
);
</script>

<template>
  <h1>{{ count }}</h1>
</template>
