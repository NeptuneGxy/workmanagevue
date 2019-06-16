<template>
  <div>
    <br />
    <table width="90%">
      <tr>
        <td>监考信息id</td>
        <td>考试科目</td>
        <td>分配教师</td>
        <td colspan="2">操作</td>
      </tr>
      <tr v-for="(i, index) in inviallots" :key="index">
        <td>{{ i.inviinfo.id }}</td>
        <td>{{ i.inviinfo.cname }}</td>
        <td>
          <template v-for="t in i.teachers">{{ addtrim(t.name) }}</template>
        </td>
        <td>
          <modifyallot v-bind:inviallot="i" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { getInviallots } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  components: { modifyallot: () => import("./modifyallot") },
  data: () => ({
    block: "none",
    inviallots: [
      {
        inviinfo: { id: null, cname: null },
        teachers: [{ id: null, name: null }]
      }
    ]
  }),
  created() {
    getInviallots();
    bus.$on(bus.inviallots, data => {
      this.inviallots = data;
    });
  },
  computed: {
    addtrim() {
      return date => date + " ";
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
