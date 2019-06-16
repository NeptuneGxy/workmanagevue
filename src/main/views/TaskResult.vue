<template>
  <div>
    <br />
    <table width="80%">
      <tr>
        <td>序号</td>
        <td>教师</td>
        <td>任务名称</td>
        <td>任务描述</td>
        <td>回复内容</td>
        <td>完成状态</td>
        <td>回复时间</td>
      </tr>
      <tr v-for="(r, index) in replys" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ r.name }}</td>
        <td>{{ r.title }}</td>
        <td>{{ r.tcontent }}</td>
        <td>{{ r.rcontent }}</td>
        <td>{{ r.status }}</td>
        <td>{{ r.time }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getAllReply } from "@/main/api/Main";
export default {
  data: () => ({
    replys: [
      {
        id: null,
        name: null,
        title: null,
        tcontent: null,
        rcontent: null,
        time: null,
        status: null
      }
    ]
  }),
  created() {
    getAllReply();
    bus.$on(bus.replys, data => {
      this.replys = data;
    });
  }
};
</script>
