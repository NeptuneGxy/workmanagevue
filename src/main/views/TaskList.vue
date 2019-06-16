<template>
  <div>
    <button @click="open">添加任务</button>
    <table width="80%">
      <tr>
        <td>id</td>
        <td>任务名称</td>
        <td>任务描述</td>
        <td>截止时间</td>
        <td>任务状态</td>
        <td colspan="3">操作</td>
      </tr>
      <tr v-for="(t, index) in tasks" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ t.taskTitle }}</td>
        <td>{{ t.taskContent }}</td>
        <td>{{ t.deadline }}</td>
        <td v-if="t.taskStatus == 1">未关闭</td>
        <td v-if="t.taskStatus == 0">关闭</td>
        <td>
          <modifytask v-bind:task="t" />
        </td>
        <td>
          <offtask v-bind:task="t" />
        </td>
        <td>
          <reply v-bind:task="t" />
        </td>
      </tr>
    </table>

    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label>
            名称：
            <input type="text" v-model="task.taskTitle" />
            <br />
          </label>
          <label>
            描述：
            <textarea v-model="task.taskContent" />
            <br />
          </label>
          <label>
            截止时间：
            <input type="text" v-model="task.deadline" />
            <br />
          </label>
          <button>
            <i class="material-icons" @click="add">check</i>
          </button>
        </form>
        <p style="text-align:right">
          <i class="material-icons" @click="close">close</i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getAllTask } from "@/main/api/Main";
import { postAddTask } from "@/main/api/Main";
export default {
  components: {
    offtask: () => import("./offtask"),
    modifytask: () => import("./modifytask"),
    reply: () => import("./reply")
  },
  data: () => ({
    block: "none",
    tasks: [
      {
        id: null,
        taskTitle: null,
        taskContent: null,
        deadline: null,
        taskStatus: null
      }
    ],
    task: {
      id: null,
      taskTitle: null,
      taskContent: null,
      deadline: null,
      taskStatus: null
    }
  }),
  created() {
    getAllTask();
    bus.$on(bus.tasks, data => {
      this.tasks = data;
    });
  },
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      postAddTask({ task: this.task });
      alert("添加成功");
      this.close();
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
