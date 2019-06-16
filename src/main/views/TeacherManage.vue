<template>
  <div>
    <button @click="open">添加教师</button>
    <table width="80%">
      <tr>
        <td>id</td>
        <td>姓名</td>
        <td>职称</td>
        <td>简介</td>
        <td>手机号</td>
        <td colspan="2">操作</td>
      </tr>
      <tr v-for="(t, index) in teachers" :key="index">
        <td>{{ t.id }}</td>
        <td>{{ t.name }}</td>
        <td>{{ t.title }}</td>
        <td>{{ t.brief }}</td>
        <td>{{ t.phone }}</td>
        <td>
          <modifyteacher v-bind:teacher="t" />
        </td>
        <td>
          <tobemanage v-bind:teacher="t" />
        </td>
      </tr>
    </table>

    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label>
            名称：
            <input type="text" v-model="teacher.name" />
            <br />
          </label>
          <label>
            职称：
            <input type="text" v-model="teacher.title" />
            <br />
          </label>
          <label>
            简介：
            <input type="text" v-model="teacher.brief" />
          </label>
          <br />
          <label>
            手机号：
            <input type="text" v-model="teacher.phone" />
          </label>
          <br />
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
import { getTeachers } from "@/main/api/Main";
import { postAddTeacher } from "@/main/api/Main";
export default {
  components: {
    modifyteacher: () => import("./modifyteacher"),
    tobemanage: () => import("./tobemanage")
  },
  data: () => ({
    block: "none",
    teachers: [
      {
        id: null,
        name: null,
        count: null,
        title: null,
        brief: null,
        phone: null
      }
    ],
    teacher: {
      id: null,
      name: null,
      count: null,
      title: null,
      brief: null,
      phone: null
    }
  }),
  created() {
    getTeachers();
    bus.$on(bus.teachers, data => {
      this.teachers = data;
    });
  },
  methods: {
    open() {
      this.block = "block";
    },
    mclose() {
      this.mclose = "none";
    },
    close() {
      this.block = "none";
    },
    add() {
      postAddTeacher({ teacher: this.teacher });
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
