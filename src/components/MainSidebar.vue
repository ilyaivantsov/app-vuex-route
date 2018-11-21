<template>
    <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
        <div class="main-navbar">
            <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                <a class="navbar-brand w-100 mr-0" href="/" style="line-height: 25px;">
                    <div class="d-table m-auto">
                        <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="https://designrevision.com/demo/shards-dashboards/images/shards-dashboards-logo.svg"
                            alt="ERP system">
                        <span class="d-none d-md-inline ml-1">ERP system</span>
                    </div>
                </a>
                <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                    <i class="material-icons">&#xE5C4;</i>
                </a>
            </nav>
        </div>
        <div class="nav-wrapper">
            <ul class="nav flex-column">
                <li class="nav-item" v-for="link in links" v-bind:key="link.id">
                    <router-link v-bind:to="link.url" class="nav-link">
                        <i class="material-icons">{{link.material_icon}}</i>
                        <span>{{link.name}}</span>
                    </router-link>   
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
export default {
  data: function() {
    return {
    links:[
    {
      id: 1,
      url: "/",
      name: "Статистика",
      material_icon: "signal_cellular_alt"
    },
    {
      id: 2,
      url: "./profile.html",
      name: "Меню",
      material_icon: "note_add"
    },
    {
      id: 3,
      url: "./add_user.html",
      name: "Доступ",
      material_icon: "vpn_key"
    },
    {
      id: 4,
      url: "./",
      name: "Настройки",
      material_icon: "settings"
    }
  ]
    };
  },
  computed: {
    // Для получения links из БД по API
    Links: function () {
      // `this` указывает на экземпляр vm
      return []
    }
  }
};
</script>
