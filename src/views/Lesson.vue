<template>
  <div class="lesson-page">
    <div class="lesson-page__title">Тема урока: <strong>{{lessonTitle}}</strong></div>
    <div class="lesson-page__date">Дата проведения: <strong>{{lessonDate}}</strong></div>
    <b-nav tabs justified>
      <b-nav-item :active="tab === 1" v-on:click="tab = 1" @click="goToTab('tests')">Тесты</b-nav-item>
      <b-nav-item :active="tab === 2" v-on:click="tab = 2" @click="goToTab('stats')">Статистика</b-nav-item>
    </b-nav>
    <router-view @setActiveTab="setActiveTab" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Lesson',
  components: {
  },
  methods: {
    ...mapActions(['fetchLessons']),
    goToTab(tab) {
      this.$router.push(`/lesson/${this.lessonId}/${tab}`, () => {});
    },
    setActiveTab(tab) {
      this.tab = tab;
    }
  },
  computed: {
    ...mapGetters({
      lessons: 'lessonById',
    }),
    lessonTitle() {
      if (this.lessons(this.lessonId).length > 0) {
        return this.lessons(this.lessonId)[0].title;
      } else {
        return '';
      }
    },
    lessonDate() {
      console.log(this.$route.params)
      if (this.lessons(this.lessonId).length > 0) {
        let a = new Date(+this.lessons(this.lessonId)[0].startedAt);
        let year = a.getFullYear();
        let month = a.getMonth().toString().padStart(2, '0');
        let date = a.getDate().toString().padStart(2, '0');
        let hour = a.getHours().toString().padStart(2, '0');
        let min = a.getMinutes().toString().padStart(2, '0');
        return date + '.' + month + '.' + year + ' в ' + hour + ':' + min;
      } else {
        return '';
      }
    }
  },
  async mounted() {
    await this.fetchLessons()
  },
  data: function () {
    return {
      tab: false,
      lessonId: this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
  .lesson-page {
    padding-top: 8px;
    &__title {
      margin-top: 12px;
      font-size: 24px;
      font-weight: 400;
      strong {
        font-weight: 600;
      }
    }
    &__date {
      color: #4B587C;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .nav-tabs {
    margin-top: 24px;
  }
</style>