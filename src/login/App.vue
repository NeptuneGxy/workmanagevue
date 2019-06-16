<template>
  <div id="app">
    <form ref="login">
      <input v-model="user.number" />
      <br />
      <input type="password" v-model="user.password" />
      <br />
      <button type="button" @click="login">登录</button>
    </form>
    <alert />
  </div>
</template>
<script>
import { login } from "./api/Login";
export default {
  components: { alert: () => import("@/components/AlertDialog") },
  data: () => ({
    user: { number: null, password: null }
  }),
  methods: {
    login() {
      login(this.user);
      // 否则发送的user会被清空
      this.$nextTick(() => {
        this.user = { number: null, password: null };
      });
    }
  }
};
</script>

<style>
form {
  position: fixed;
  top: 250px;
  left: 500px;
}
</style>
