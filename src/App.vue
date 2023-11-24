<template>
  <h1
    v-if="msg"
    class="message" 
    @click="log">
    {{ msg }}
  </h1>
  <div></div>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
    components: {
        Hello
    },
    data() {
        return {
            msg: 'Hello webpack'
        }
    },
    methods: {
        log() {
            window.addEventListener(),
            document.querySelector()
        }
    }
}
</script>

