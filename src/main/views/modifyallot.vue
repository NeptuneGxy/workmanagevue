<template>
  <div>
    <button @click="modifyallot">修改分配</button>
    <div id="bg" v-bind:style="{ display: mblock }">
      <div id="content" v-bind:style="{ display: mblock }">
        <form>
          监考科目id:{{ inviallot.inviinfo.id }}
          <br />
          监考科目:{{ inviallot.inviinfo.cname }} <br />监考教师:
          <template v-for="(t, index) in teachers">
            <label :key="`l${index}`">
              <input
                ref="teacher"
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
            <i class="material-icons" @click="mallot">分配</i>
          </button>
        </form>
        <p style="text-align:right">
          <i class="material-icons" @click="mclose">close</i>
        </p>
        <p>{{ inviallot.inviinfo.id }},{{ checked }}</p>
        <p>{{ formatArray }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/util/Bus";
import { getAllTeacher } from "@/main/api/Main";
import { postModifyAllot } from "@/main/api/Main";
export default {
  props: ["inviallot"],
  data: () => ({
    mblock: "none",
    checked: [],
    teachers: [
      {
        id: null,
        name: null,
        count: null,
        title: null,
        brief: null,
        phone: null
      }
    ]
  }),
  computed: {
    formatArray() {
      return this.checked.join(",");
    }
  },
  created() {
    getAllTeacher();
    bus.$on(bus.teachers, data => {
      this.teachers = data;
    });
  },
  methods: {
    mclose() {
      this.mblock = "none";
    },
    mallot() {
      postModifyAllot({
        id: this.inviallot.inviinfo.id,
        formatArray: this.formatArray
      });
      alert("修改成功");
      this.mclose();
    },
    modifyallot() {
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
