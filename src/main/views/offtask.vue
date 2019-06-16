<template>
  <div>
    <button @click="closetask">关闭任务</button>
  </div>
</template>
<script>
import { postCloseTask } from "@/main/api/Main";
export default {
  props: ["task"],
  methods: {
    closetask() {
      postCloseTask({ task: this.task });
    }
  }
};
</script>
