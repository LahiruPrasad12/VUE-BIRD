// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

// custom validation
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { numeric, required, email, min, max } from 'vee-validate/dist/rules'

extend('numeric', numeric);

extend('required', {
  ...required,
  message : 'This field is required'
})

extend('emailTest', {
  validate: (value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
  message : 'Please enter valid email address'
})

extend('password', {
  validate: (value) => value.match( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/),
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit',
})

extend('same_password', {
  params: ['target'],
  validate (value, {target}) {
    return value === target
  },
  message: 'Password confirmation should be matched'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
