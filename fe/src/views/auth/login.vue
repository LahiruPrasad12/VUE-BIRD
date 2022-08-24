<template>
  <div class="container">
    <form class="box">
      <validation-observer ref="loginValidation">
        <div class="field">
          <validation-provider
            #default="{ errors }"
            name="Email"
            rules="required|emailTest"
          >
            <label class="label">Email</label>
            <div class="control">
              <input v-model="form.email" class="input" placeholder="e.g. alex@example.com" type="email">
            </div>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </div>

        <div class="field">
          <validation-provider
            #default="{ errors }"
            name="Password"
            rules="required"
          >
            <label class="label">Password</label>
            <div class="control">
              <input v-model="form.password" class="input" placeholder="********" type="password">
            </div>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </div>

        <button class="button is-primary" @click="login" :disabled="is_btn_loading">
          {{is_btn_loading?'Signing....':'Sign in'}}
        </button>
      </validation-observer>
    </form>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import authAPI from "@/apis/modules/auth_apis";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  name: "login",
  data() {
    return {
      is_btn_loading: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  methods: {
    async login() {
      try {
        if (await this.$refs.loginValidation.validate()) {
          this.is_btn_loading = true
          await authAPI.login(this.form)
        }
      } catch (e) {

      }

    }
  }
}
</script>

<style scoped>

</style>
