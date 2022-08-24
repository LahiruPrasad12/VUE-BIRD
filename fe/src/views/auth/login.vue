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
              <input class="input" v-model="form.email" placeholder="e.g. alex@example.com" type="email">
            </div>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </div>

        <div class="field">
          <validation-provider
            #default="{ errors }"
            name="Password"
            rules="required|password"
          >
          <label class="label">Password</label>
          <div class="control">
            <input v-model="form.password" class="input" placeholder="********" type="password">
          </div>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </div>

        <button class="button is-primary">Sign in</button>
      </validation-observer>
    </form>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  name: "login",
  data() {
    return {
      form : {
        email:'',
        password:''
      }
    }
  },
  mounted() {

  },
  methods : {
    async login(){
      if(await this.$refs.loginValidation.validate()){

      }
    }
  }
}
</script>

<style scoped>

</style>
