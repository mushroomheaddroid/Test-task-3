<template>
  <div class="schedule">
    <div class="page-title">
      <h1>Расписание</h1>
    </div>

    <div class="schedule__list">
      <b-list-group>
        <b-list-group-item button v-for="(lesson, index) in lessonsOnPage" @click="goToLesson(lesson.id)" :key="index">{{ lesson.title }}</b-list-group-item>
      </b-list-group>
    </div>

    <div class="mt-3">
      <b-pagination v-model="currentPage" @input="setPage(currentPage)" :total-rows="lessonsLength" :per-page="itemsPerPage" align="center"></b-pagination>
    </div>

  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Schedule',
  computed: {
    ...mapGetters({
      lessons: 'lessonsByType',
      current: 'current',
    }),
    lessonsOnPage() {
      return this.lessons(this.current).slice(this.listFirstItem, this.listLastItem);
    },
    lessonsLength() {
      return this.lessons(this.current).length;
    },

  },
  methods: {
    ...mapActions(['fetchLessons']),

    setPage(page) {
      if (page === 1) {
        this.listFirstItem = 0;
        this.listLastItem = this.itemsPerPage;
      } else {
        this.listFirstItem = (page - 1) * this.itemsPerPage;
        this.listLastItem = this.listFirstItem + this.itemsPerPage;
      }
    },

    goToLesson(id) {
      this.$router.push({ name: 'Lesson', params: { id } });
    }
  },
  async mounted() {
    await this.fetchLessons()
  },
  data() {
    return {
      itemsPerPage: 5,
      currentPage: 1,
      listFirstItem: 0,
      listLastItem: 5
    }
  }
}

</script>

<style lang="scss">
  .schedule {
    &__list {
      margin: 48px auto;
      max-width: 400px;
      @media screen and (max-width: 500px) {
        margin: 16px auto;
      }
    }
  }
</style>