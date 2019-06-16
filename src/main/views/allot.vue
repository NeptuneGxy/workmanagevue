<template>
  <div>
    <button @click="topen">分配</button>
    <div id="bg" v-bind:style="{ display: tblock }">
      <div id="content" v-bind:style="{ display: tblock }">
        <form>
          <template v-for="(t, index) in teachers">
            <label :key="`l${index}`">
              <input
                ref="teachers"
                type="checkbox"
                v-model="checked"
                :value="t.id"
                :key="index"
              />
              {{ t.name }}
            </label>
          </template>
          <br />
          <button>
            <i class="material-icons" @click="allot">分配</i>
          </button>
        </form>
        <p style="text-align:right">
          <i class="material-icons" @click="tclose">close</i>
        </p>
        <p>{{ invi.id }},{{ checked }}</p>
        <p>{{ formatArray }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getAllTeacher } from "@/main/api/Main";
import { postInviallot } from "@/main/api/Main";
export default {
  props: ["invi"],
  data: () => ({
    tblock: "none",
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
    checked: [],
    c: null
  }),
  created() {
    getAllTeacher();
    bus.$on(bus.teachers, data => {
      this.teachers = data;
    });
  },
  computed: {
    formatArray() {
      return this.checked.join(",");
    }
  },
  methods: {
    tclose() {
      this.tblock = "none";
    },
    topen() {
      this.tblock = "block";
    },
    allot() {
      console.log(this.invi.id);
      console.log(this.formatArray);
      postInviallot({ id: this.invi.id, formatArray: this.formatArray });
      alert("分配成功");
      this.tclose();
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
