<template>
  <div class="header">
    <button v-b-toggle.sidebar-variant class="navbar-button">
      <icon-base
          width="28"
          height="28"
          view-box="0 0 28 28"
          icon-name="menu"
      ><icon-menu />
      </icon-base>
    </button>
    <div class="header__logo">EDUCATION</div>
    <div class="header__dropdown">

      <b-form-select v-model="selected" @change="goToSchedule">
        <b-form-select-option :value="null" disabled>Выберите курс</b-form-select-option>
        <b-form-select-option v-for="(course, index) in courses" :key="index" :value="course.id">{{ course.name }}</b-form-select-option>
      </b-form-select>
    </div>

  </div>
</template>

<script>

import IconBase from "@/components/IconBase";
import IconMenu from '@/components/icons/IconMenu.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Sidebar',
  components: {
    IconBase,
    IconMenu,
  },
  props: ['courses'],
  data() {
    return {
      selected: null
    }
  },
  watch: {
    selected(value) {
      this.updateCourseType(value)
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['updateCourseType']),
    goToSchedule() {
      this.$router.push(`/lessons`, () => {});
    }
  },
}
</script>

<style lang="scss">

.navbar-button {
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  outline: none;
  border: 0;
  background-color: #FFFFFF;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
}

.header {
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 72px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 92, 191, 0.2);
  display: flex;
  align-items: center;
  padding: 0 32px 0 12px;
  &__logo {
    width: 200px;
    height: 48px;
    background-color: #2c3e50;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  &__dropdown {
    margin-left: auto;
  }
}

</style>