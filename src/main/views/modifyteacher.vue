<template>
  <div>
    <button @click="modifyteacher">修改教师</button>
    <div id="bg" v-bind:style="{ display: mblock }">
      <div id="content" v-bind:style="{ display: mblock }">
        <form>
          教师id:{{ teacher.id }}
          <label>
            名称：
            <input type="text" v-model="teacher.name" v-text="teacher.name" />
            <br />
          </label>
          <label>
            职称：
            <input type="text" v-model="teacher.title" v-text="teacher.title" />
            <br />
          </label>
          <label>
            简介：
            <input type="text" v-model="teacher.brief" v-text="teacher.brief" />
          </label>
          <br />
          <label>
            手机号：
            <input type="text" v-model="teacher.phone" v-text="teacher.phone" />
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
import { postModifyTeacher } from "@/main/api/Main";
export default {
  props: ["teacher"],
  data: () => ({
    mblock: "none"
  }),
  methods: {
    mclose() {
      this.mblock = "none";
    },
    modify() {
      postModifyTeacher({ teacher: this.teacher });
      alert("修改成功");
      this.mclose();
    },
    modifyteacher() {
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
