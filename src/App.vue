<template>
  <div id="app">
    <Header
        :courses="courses"
    />
    <Sidebar/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";

  import { BootstrapVue } from 'bootstrap-vue';
  import {mapActions, mapGetters} from "vuex";

  Vue.use(BootstrapVue);

  export default {
    name: 'App',
    components: {
      Sidebar,
      Header
    },

    computed: {
      ...mapGetters(['courses']),
    },

    methods: {
      Vue,
      ...mapActions(['fetchCourses']),
    },

    async mounted() {
      await this.fetchCourses();
    }
  }
</script>

<style lang="scss">

@import "~bootstrap";
@import "~bootstrap-vue";

.main {
  margin-top: 72px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page-title {
  padding-top: 32px;
  @media screen and (max-width: 500px) {
    padding-top: 16px;
    h1 {
      font-size: 24px;
    }
  }
}
</style>
