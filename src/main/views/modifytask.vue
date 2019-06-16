<template>
  <div>
    <button @click="modifytask">修改任务</button>
    <div id="bg" v-bind:style="{ display: mblock }">
      <div id="content" v-bind:style="{ display: mblock }">
        <form>
          <label>
            名称：
            <input
              type="text"
              v-model="task.taskTitle"
              v-text="task.taskTitle"
            />
            <br />
          </label>
          <label>
            职称：
            <input
              type="text"
              v-model="task.taskContent"
              v-text="task.taskContent"
            />
            <br />
          </label>
          <label>
            简介
            <input type="text" v-model="task.deadline" v-text="task.deadline" />
          </label>
          <br />
          <button>
            <i class="material-icons" @click="modify">修改</i>
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
import { postModifyTask } from "@/main/api/Main";
export default {
  props: ["task"],
  data: () => ({
    mblock: "none"
  }),
  methods: {
    mclose() {
      this.mblock = "none";
    },
    modify() {
      postModifyTask({ task: this.task });
      alert("修改成功");
      this.mclose();
    },
    modifytask() {
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
