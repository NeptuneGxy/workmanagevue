<template>
  <div id="app">
    <myheader />
    <div id="main">
      <sidebar id="sidebar" />
      <div id="router-view">
        <router-view v-bind:key="$route.path" />
      </div>
    </div>
    <myfooter />
  </div>
</template>
<script>
// import { getMain } from "@/main/api/Main";
export default {
  components: {
    myheader: () => import("./views/Header"),
    sidebar: () => import("./views/Sidebar"),
    myfooter: () => import("./views/Footer")
  },
  data: () => ({
    isAdmin: false
  })
  // created() {
  //   getMain();
  // }
};
</script>

<style>
#sidebar {
  vertical-align: top;
  margin: 10px;
  display: inline-block;
  border: 1px solid;
  width: 20%;
}
#router-view {
  /* vertical-align: top; */
  margin: 8px;
  display: inline-block;
  border: 1px solid;
  width: 75%;
  height: 450px;
}
</style>
