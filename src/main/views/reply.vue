<template>
  <div>
    <button @click="reply">回复</button>
    <div id="bg" v-bind:style="{ display: mblock }">
      <div id="content" v-bind:style="{ display: mblock }">
        <form>
          任务id:{{ task.id }} <br />教师id:3
          <label>
            回复内容：
            <input type="text" v-model="content" v-text="content" />
            <br />
          </label>
          <button>
            <i class="material-icons" @click="mreply">回复</i>
          </button>
        </form>
        <p style="text-align:right">
          <i class="material-icons" @click="mclose">close</i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { postReply } from "@/main/api/Main";
export default {
  props: ["task"],
  data: () => ({
    mblock: "none",
    content: null
  }),
  methods: {
    mclose() {
      this.mblock = "none";
    },
    mreply() {
      postReply({ taskid: this.task.id, teacherid: 3, content: this.content });
      alert("回复成功");
      this.mclose();
    },
    reply() {
      this.mblock = "block";
    }
  }
};
</script>
<style scoped>
#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  z-index: 2;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: none;
  width: 500px;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
</style>
