<template>
<div class="main-navbar sticky-top bg-white">
<nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
    <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <div class="input-group input-group-seamless ml-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <input class="navbar-search form-control" type="text" placeholder="Поиск ..." aria-label="Search">
        </div>
    </form>
    <ul class="navbar-nav border-left flex-row ">
        <li class="nav-item border-right dropdown notifications">
            <a class="nav-link nav-link-icon text-center" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="nav-link-icon__wrapper">
                    <i class="material-icons">&#xE7F4;</i>
                    <span class="badge badge-pill badge-danger" v-if="numberOfNotifications">{{numberOfNotifications}}</span>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink" v-if="numberOfNotifications">
                <a class="dropdown-item" v-for="notification in notifications" v-bind:key="notification.id" v-bind:href="notification.url">
                    <div class="notification__icon-wrapper">
                        <div class="notification__icon">
                            <i class="material-icons">{{notification.material_icons}}</i>
                        </div>
                    </div>
                    <div class="notification__content">
                        <span class="notification__category">{{notification.title}}</span>
                        <p>{{notification.message}}</p>
                    </div>
                </a>
                <a class="dropdown-item notification__all text-center" href="#" @click="clearNotifications()"> Очистить </a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="true" aria-expanded="false">
                <img class="user-avatar rounded-circle mr-2" alt="User Avatar"  v-bind:src="user.info.featuredImage">
                <span class="d-none d-md-inline-block">{{user.info.firstName +' '+user.info.lastName}}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-small">
              <div v-for="item in  user_menu" v-bind:key="item.id">
                <router-link v-bind:to="item.url" class="dropdown-item">
                  <i class="material-icons">{{item.material_icons}}</i> {{item.name}}
                </router-link>
              </div>
              <a class="dropdown-item text-danger" href="/?logout=1"><i class="material-icons text-danger">&#xE879;</i> Выйти </a>
            </div>
        </li>
    </ul>
</nav>
</div>
</template>
<script>
export default {
  data: function() {
    return {
      notifications: [
          {
            id: 1,
            title: "Sales",
            url: "/",
            material_icons: "note_add",
            message: "It could have been worse!"
          },
          {
            id: 2,
            title: "Analytics",
            url: "/",
            material_icons: "note",
            message: "Your website’s active users count increased by in the last week Great job!"
          }
        ],
       user_menu: [
           {
               id:1,
               material_icons:"person",
               name: "Профиль",
               url: "/profile"
           },
           {
               id:2,
               material_icons:"person_add",
               name: "Добавить",
               url: "/adduser"
           }
       ]
    };
  },
  computed: {
    // Для получения notifications из БД по API
    numberOfNotifications: function() {
      // `this` указывает на экземпляр vm
      return this.notifications.length;
    }
  },
  props: ["user"],
  methods: {
    clearNotifications: function() {
      return this.notifications=[]
    }
  }
//   mounted: function () {
//       window.n = this.notifications;
//   }
};
</script>
