<template>
  <div class="lesson-page">

    <b-card title="Тесты" sub-title="Результаты тестирования">

    </b-card>

  </div>
</template>

<script>
export default {
  name: 'Tests',
  mounted() {
    this.$emit('setActiveTab', 1);
  }
}
</script>

