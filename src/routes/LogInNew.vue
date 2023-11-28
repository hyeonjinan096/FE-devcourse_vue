<template>
  <!-- submit동작 이후 변화 방지 -->
  <form @submit.prevent>
    <input v-model="userID" placeholder="Your ID!" type="text" />
    <input v-model="userPW" placeholder="Your PW!" type="password" />
    <button @click="logIn">Log In!</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      userPW: '',
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', {
        id: this.userID,
        pw: this.userPW,
      });
    },
  },
};
</script>
