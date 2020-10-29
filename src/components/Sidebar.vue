<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-variant" bg-variant="dark" text-variant="light" aria-labelledby="sidebar-no-header-title" no-header shadow >

      <nav class="mb-3">
        <b-nav vertical>
            <router-link active-class="sidebar__item_disabled" class="sidebar__item" to="/" exact>Главная</router-link>
            <router-link active-class="sidebar__item_disabled" class="sidebar__item" to="/lessons" exact>Расписание</router-link>
        </b-nav>
      </nav>

    </b-sidebar>
  </div>
</template>


<style lang="scss">
  .sidebar {
    .b-sidebar {
      top: 72px;
    }
    .nav {
      margin-top: 12px;
    }
    &__item {
      padding: 12px 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: -1px;
      color: #FFFFFF;
      &:hover {
        color: #42b983;
        text-decoration: none;
        background-color: #575C61;
      }
      &_disabled {
        background-color: #575C61;
        color: #42b983;
        text-decoration: none;
        pointer-events: none;
      }
    }
  }
</style>