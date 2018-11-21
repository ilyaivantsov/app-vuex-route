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
            <!-- Edit User Details Card -->
            <div class="card card-small edit-user-details mb-4">
                <div class="card-body p-0">
                    <form id="form-get-new-user" class="py-4" v-on:submit.prevent="addUser">
                        <div class="form-row mx-4">
                            <div class="col mb-3">
                                <h6 class="form-text m-0">Новый пользователь</h6>
                                <p class="form-text text-muted m-0">Укажите основные сведения о новом
                                    пользователе</p>
                            </div>
                        </div>
                        <div class="form-row mx-4">
                            <div class="col-lg-8">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="firstName">Имя</label>
                                        <input type="text" class="form-control" placeholder="Иван" v-model="new_user.info.firstName" required>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="lastName">Фамилия</label>
                                        <input type="text" class="form-control" placeholder="Иванович" v-model="new_user.info.lastName" required>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phoneNumber">Номер телефона</label>
                                        <div class="input-group input-group-seamless">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="material-icons"></i>
                                                </div>
                                            </div>
                                            <input type="phone" class="form-control" placeholder="+7 999 999 99 99" v-model="new_user.info.phone">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="emailAddress">Аватар</label>
                                        <div class="input-group input-group-seamless">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i class="material-icons mr-1"></i>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" placeholder="URL" v-model="new_user.info.featuredImage" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="edit-user-details__avatar m-auto">
                                  <img alt="User Avatar" v-bind:src="new_user.info.featuredImage">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-row mx-4">
                            <div class="col mb-3">
                                <h6 class="form-text m-0">Социальные сети</h6>
                                <p class="form-text text-muted m-0">Добавить информацию о социальных
                                    сетях</p>
                            </div>
                        </div>
                        <div class="form-row mx-4">
                            <div class="form-group col-md-6">
                                <label for="socialVK">Vk</label>
                                <div class="input-group input-group-seamless">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fab fa-vk"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" v-model="new_user.info.vk" required>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="socialTelegram">Telegram</label>
                                <div class="input-group input-group-seamless">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="fab fa-telegram"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" v-model="new_user.info.telegram">
                                </div>
                            </div>

                        </div>
                        <hr>
                        <div class="form-row mx-4">
                            <div class="col mb-3">
                                <h6 class="form-text m-0">Доступ</h6>
                                <p class="form-text text-muted m-0">К каким системам у пользователя
                                    будет доступ</p>
                            </div>
                        </div>
                        <div class="form-row mx-4">
                            <label class="col col-form-label">
                                Касса <small class="form-text text-muted">Изменение учета данных
                                    системы</small>
                            </label>
                            <div class="col d-flex">
                                <div class="custom-control custom-toggle ml-auto my-auto">
                                    <input type="checkbox" class="custom-control-input" checked="">
                                    <label class="custom-control-label"></label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mx-4">
                            <label class="col col-form-label">
                                Администратор <small class="form-text text-muted"> Доступ к просмотру
                                    статитики системы</small>
                            </label>
                            <div class="col d-flex">
                                <div class="custom-control custom-toggle ml-auto my-auto">
                                    <input type="checkbox" class="custom-control-input"  v-model="new_user.access">
                                    <label class="custom-control-label"></label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="form-row mx-4">
                            <div class="col mb-3">
                                <h6 class="form-text m-0">Параметры входа</h6>
                                <p class="form-text text-muted m-0">Укажите логин и пароль для нового
                                    пользователя</p>
                            </div>
                        </div>
                        <div class="form-row mx-4">
                            <div class="form-group col-md-6">
                                <label>Логин</label>
                                <input type="text" class="form-control" placeholder="Логин" v-model="new_user.username" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label>Пароль</label>
                                <input type="password" class="form-control" placeholder="Пароль"  v-model="new_user.password" required>
                            </div>
                        </div>
                        <div class="card-footer border-top">
                            <button type="submit" class="btn btn-sm btn-accent ml-auto d-table mr-3">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- End Edit User Details Card -->
        </div>
    </div>
    <!-- End вставка контента -->
</div>
</template>
<script>
var user_blank = {
  username: "",
  password: "",
  access: false,
  info: {
    featuredImage: "https://vk.com/images/camera_200.png?ava=1",
    vk: "",
    firstName: "",
    phone: "",
    lastName: ""
  }
};

export default {
  data: function() {
    return {
      new_user: jQuery.extend(true, {}, user_blank)
    };
  },
  methods: {
    addUser() {
      fetch("http://192.168.0.100:3000/api/v1/users", {
        mode: "cors",
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.new_user)
      })
        .then(this.status)
        .then(this.response)
        .catch(this.error);
    },
    error(error) {
      console.log(error);
      this.$store.commit("alertNew", {
        active: true,
        status: "alert-danger",
        message: "Что-то не так("
      });
      window.scrollTo(0, 0);
    },
    response(response) {
      console.log(response);
      this.new_user = jQuery.extend(true, {}, user_blank);
      this.$store.commit("alertNew", {
        active: true,
        status: "alert-success",
        message: "Добавлен новый пользователь!"
      });
      window.scrollTo(0, 0);
    },
    status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }
  }
};
</script>

