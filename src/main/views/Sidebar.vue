<template>
  <div>
    <ul>
      <li class="submenu">
        用户管理
        <ul>
          <li><router-link to="/TeacherManage">教师管理</router-link></li>
        </ul>
        监考管理
        <ul>
          <li><router-link to="/InviInfo">监考信息</router-link></li>
          <li><router-link to="/InviAllot">监考分配信息</router-link></li>
        </ul>
        任务管理
        <ul>
          <li><router-link to="/TaskList">任务列表</router-link></li>
          <li><router-link to="/TaskResult">回复情况</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  padding: 5px;
  display: inline-block;
  vertical-align: top;
  width: 20%;
  margin: 5px 10px;
}
/* 一二级ul样式 */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
/* 一二级超链接导航样式 */
a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}
li.submenu > a {
  background-color: #333;
  font-weight: bold;
  color: #1d835a;
}
/* 一级标题 */
a:hover {
  font-weight: bold;
  background-color: #555;
  color: white;
}
</style>
