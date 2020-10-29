import Vue from 'vue'
import Vuex from 'vuex'
import Courses from "@/store/modules/courses";
import Lessons from "@/store/modules/lessons";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Courses,
    Lessons
  }
})
