import Vue from 'vue'
import Router from 'vue-router'
import auth_router from "./modules/auth_router";
import notice_routes from "./modules/notice_routes";

Vue.use(Router)

export default new Router({
  routes: [
    ...auth_router,
    ...notice_routes
  ]
})
