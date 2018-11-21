<template>
<div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Добавить пользователя</span>
            <h3 class="page-title">Пользователи</h3>
        </div>
    </div>
    <!-- End Page Header -->
    <!-- Вставка контента -->
    <div class="row">
        <div class="col-lg-10 mx-auto mt-4">
    <div class="card card-small user-details mb-4">
        <div class="card-body p-0">
            <div class="user-details__avatar mx-auto">
                <img class="user-avatar rounded-circle mr-2" v-bind:src="user.info.featuredImage" alt="User Avatar">
            </div>
            <h4 class="text-center m-0 mt-2">{{user.info.firstName+' '+user.info.lastName}}</h4>
            <p class="text-center text-light m-0 mb-2">Социальные сети</p>
            <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4">
                <li class="mx-1"><a v-bind:href="user.info.vk"><i class="fab fa-vk"></i></a></li>
                <li class="mx-1"><a v-bind:href="user.info.telegram"><i class="fab fa-telegram"></i></a></li>
                <li class="mx-1"><a v-bind:href="'mailto:'+user.info.email"><i class="fab fa-google"></i></a></li>
            </ul>
            <div class="user-details__user-data border-top border-bottom p-4">
                <div class="row mb-3">
                    <div class="col w-50" v-if="user.info.email">
                        <span>Email</span>
                        <span>{{user.info.email}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col w-50" v-if="user.info.phone">
                        <span>Телефон</span>
                        <span>{{user.info.phone}}</span>
                    </div>
                    <div class="col w-50">
                        <span>Логин</span>
                        <span>{{user.username}}</span>
                    </div>
                </div>
            </div>
            <div class="user-details__tags p-4">
                <span class="badge badge-pill badge-light text-light text-uppercase mb-2 border">Работник недели</span>
                <span class="badge badge-pill badge-light text-light text-uppercase mb-2 border">Выручка</span>
            </div>
        </div>
    </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
