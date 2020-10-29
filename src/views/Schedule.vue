<template>
  <div class="schedule">
    <div class="page-title">
      <h1>Расписание</h1>

      <div class="schedule__list">
        <b-list-group>
          <b-list-group-item button v-for="(lesson, index) in lessons(current)" @click="goToLesson(lesson.id)" :key="index">{{ lesson.title }}</b-list-group-item>
        </b-list-group>
      </div>

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
  },
  methods: {
    ...mapActions(['fetchLessons']),

    goToLesson(id) {
      this.$router.push({ name: 'Lesson', params: { id } });
    }
  },
  async mounted() {
    await this.fetchLessons()
  }
}

</script>

<style lang="scss">
  .schedule {
    &__list {
      margin: 48px auto;
      max-width: 400px;
    }
  }
</style>