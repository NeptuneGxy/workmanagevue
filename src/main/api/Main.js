import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function getInviinfos() {
  axios.get("/admin/getAll").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.invis, response.data.inviinfos);
    }, 1000);
  });
}
export function getInviallots() {
  axios.get("/admin/getInviallots").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.inviallots, response.data.inviallots);
    }, 1000);
  });
}
export function getAllTeacher() {
  axios.get("/admin/getTeacherByNum").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.teachers, response.data.teachers);
    }, 1000);
  });
}
export function getTeachers() {
  axios.get("/admin/getAllTeacher").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.teachers, response.data.teachers);
    }, 1000);
  });
}
export function postAddTeacher(data) {
  axios.post("/admin/addTeacher", data.teacher).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.teachers, response.data.teachers);
    }, 1000);
  });
}
export function postModifyTeacher(data) {
  axios.post("/admin/updateTeacher", data.teacher).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.teachers, response.data.teachers);
    }, 1000);
  });
}
export function postAddAdmin(data) {
  axios.post(`/admin/addAdmin/${data.id}`).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.teachers, response.data.teachers);
    }, 1000);
  });
}
export function postInviallot(data) {
  axios
    .post(`/admin/addInviallot/${data.id}/${data.formatArray}`)
    .then(response => {
      // 模拟异步延时操作
      setTimeout(() => {
        bus.$emit(bus.invis, response.data.inviinfos);
      }, 1000);
    });
}
export function postModifyAllot(data) {
  axios
    .post(`/admin/updateAllot/${data.id}/${data.formatArray}`)
    .then(response => {
      // 模拟异步延时操作
      setTimeout(() => {
        bus.$emit(bus.inviallots, response.data.inviallots);
      }, 1000);
    });
}
export function getAllTask() {
  axios.get("/admin/task/taskList").then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.tasks, response.data.tasks);
    }, 1000);
  });
}
export function postAddTask(data) {
  axios.post("/admin/task/addTask", data.task).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.tasks, response.data.tasks);
    }, 1000);
  });
}
export function postModifyTask(data) {
  axios.post("/admin/task/updateTask", data.task).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.tasks, response.data.tasks);
    }, 1000);
  });
}
export function postCloseTask(data) {
  axios.post("/admin/task/offTask", data.task).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.tasks, response.data.tasks);
    }, 1000);
  });
}
export function getAllReply() {
  axios.get(`/admin/task/replyList`).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.replys, response.data.replys);
    }, 1000);
  });
}
export function postReply(data) {
  axios
    .post(`admin/task/reply/${data.taskid}/${data.teacherid}/${data.content}`)
    .then(response => {
      // 模拟异步延时操作
      setTimeout(() => {
        bus.$emit(bus.tasks, response.data.tasks);
      }, 1000);
    });
}
export function postInvi(data) {
  axios.post(`admin/addInviinfo`, data.invi).then(response => {
    // 模拟异步延时操作
    setTimeout(() => {
      bus.$emit(bus.invis, response.data.inviinfos);
    }, 1000);
  });
}
