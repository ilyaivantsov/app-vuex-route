<template>
  <div class="container-fluid">
        <div class="row">
            <!-- Main Sidebar -->
            <main-sidebar></main-sidebar>
            <!-- End Main Sidebar -->
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <!-- Main Navbar -->
                <main-navbar v-bind:user="user"></main-navbar>
                <!-- End Main Navbar -->
                <!-- Alert -->
                <alert-app></alert-app>
                <!-- End Alert -->
                <!-- Main Content -->
                <div class="main-content-container container-fluid px-4">
                  <transition name="router-anim">
                    <router-view/>
                  </transition>  
                </div>
                <!-- End Main Content -->
                <footer-app></footer-app>
            </main>
        </div>
    </div>
</template>

<script>
import MainSidebar from "./components/MainSidebar.vue";
import MainNavbar from "./components/MainNavbar.vue";
import AlertApp from "./components/AlertApp.vue";
import FooterApp from "./components/FooterApp.vue";


// var user = {
//     username: "ilya",
//     password: "qwerty",
//     info: {
//       featuredImage:"https://pp.userapi.com/c824203/v824203844/176402/hQPasxU2Pf4.jpg",
//       email: "iwww68@gmail.com",
//       access: true,
//       vk: "https://vk.com/ivantsovilya",
//       telegram: "",
//       firstName: "Илья",
//       lastName: "Иванцов"
//     }
//   };

export default {
  data: function() {
    return {
      // user:user   положить в store
      // alert:alert 
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    MainSidebar: MainSidebar,
    MainNavbar: MainNavbar,
    AlertApp: AlertApp,
    FooterApp: FooterApp
  },
  created: function () {
      this.$store.dispatch('getUser','newcat')
  }
};
</script>
<style scoped>
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-1000px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>


