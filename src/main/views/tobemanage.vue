<template>
  <div>
    <button @click="tobemanage">设为管理员</button>
  </div>
</template>
<script>
import { postAddAdmin } from "@/main/api/Main";
export default {
  props: ["teacher"],
  methods: {
    tobemanage() {
      postAddAdmin({ id: this.teacher.id });
      alert("设为管理员成功");
    }
  }
};
</script>
