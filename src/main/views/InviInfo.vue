<template>
  <div>
    <button @click="open">添加监考信息</button>
    <table width="90%">
      <tr>
        <td>id</td>
        <td>课程名称</td>
        <td>开始时间</td>
        <td>结束时间</td>
        <td>地点</td>
        <td>所需人数</td>
        <td>状态</td>
        <td>操作</td>
      </tr>
      <tr v-for="(i, index) in invis" :key="index">
        <td>{{ i.id }}</td>
        <td>{{ i.cname }}</td>
        <td>{{ i.startTime }}</td>
        <td>{{ i.endTime }}</td>
        <td>{{ i.address }}</td>
        <td>{{ i.num }}</td>
        <td>{{ i.status }}</td>
        <td>
          <allot v-bind:invi="i" />
        </td>
      </tr>
    </table>

    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label>
            课程名：
            <input type="text" v-model="invi.cname" />
            <br />
          </label>
          <label>
            开始时间：
            <input type="text" v-model="invi.startTime" />
            <br />
          </label>
          <label>
            结束时间：
            <input type="text" v-model="invi.endTime" />
            <br />
          </label>
          <label>
            地点：
            <input type="text" v-model="invi.address" />
            <br />
          </label>
          <label>
            所需人数：
            <input type="text" v-model="invi.num" />
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
import { getInviinfos } from "@/main/api/Main";
import { postInvi } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  components: { allot: () => import("./allot") },
  data: () => ({
    block: "none",
    tblock: "none",
    invis: [
      {
        id: null,
        cname: null,
        startTime: null,
        endTime: null,
        address: null,
        num: 0,
        status: null
      }
    ],
    invi: {
      id: null,
      cname: null,
      startTime: null,
      endTime: null,
      address: null,
      num: null,
      status: "未分配"
    }
  }),
  created() {
    getInviinfos();
    bus.$on(bus.invis, data => {
      this.invis = data;
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
      // this.homework.course.id = this.$route.params.cid;
      // postHomework({ homework: this.homework, cid: this.$route.params.cid });
      console.log(this.invi);
      postInvi({ invi: this.invi });
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
