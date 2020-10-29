<template>
  <div class="lesson-page">

      <b-card title="Статистика" sub-title="Статистика обучения">

      </b-card>

  </div>
</template>

<script>
export default {
  name: 'Stats',
  mounted() {
    this.$emit('setActiveTab', 2);
  }
}
</script>