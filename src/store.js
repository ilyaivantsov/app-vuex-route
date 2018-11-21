import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: {
      url: 'http://192.168.0.100:3000/api/v1/users/'
    },
    user: {
      username: "",
      password: "",
      info: {
        featuredImage: "https://vk.com/images/camera_200.png?ava=1",
        email: "",
        access: false,
        vk: "",
        telegram: "",
        phone: "",
        firstName: "Noname",
        lastName: "Nobody"
      }
    },
    alert: {
      active: true,
      status: "alert-success",
      message: "asd"
    }
  },
  mutations: {
    alertNew(state, alert) {
      state.alert = alert
    },
    alertClose(state) {
      state.alert.message = '';
      state.alert.active = false
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    getUser({ commit, state }, username) {
      fetch(state.db.url + username, { mode: 'cors' })
        .then(response => (response.json()))
        .then(response => (commit('setUser', response.data)))
    }
  }
});