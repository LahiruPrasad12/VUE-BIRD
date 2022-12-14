import Vue from 'vue';
import Vuex from 'vuex';
import authAPI from "@/apis/modules/auth_apis";


Vue.use(Vuex);


export default  new Vuex.Store({
  state: {
    current_user_data: null,
    authenticated: false,
  },
  mutations: {
    SET_CURRENT_USER: (state, value) => {
      state.current_user_data = value
    },
  },
  getters: {
    currentUser: state => state.current_user_data,
  },
  actions: {
    async login({ commit },form){

       let payload = {
         email : form.email,
         password : form.password
       }
       let respond = (await authAPI.login(payload)).data.data.user
       console.log(respond)
       commit('SET_CURRENT_USER',respond)

    }
  }
})
