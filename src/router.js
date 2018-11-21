import Vue from "vue";
import Router from "vue-router";
// Import components
import AddUser from "./views/AddUser.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/adduser",
      name: "adduser",
      component: AddUser
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
    // {
    //   path: "/new",
    //   name: "new",
    //   route level code-splitting
    //   this generates a separate chunk (about.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/New.vue")
    // }
  ]
});
