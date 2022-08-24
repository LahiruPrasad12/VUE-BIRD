<template>
  <div class="container">
    <section>
      <b-modal
        v-model="isComponentModalActive"
        :destroy-on-hide="false"
        aria-label="Example Modal"
        aria-modal
        aria-role="dialog"
        close-button-aria-label="Close"
        has-modal-card
        trap-focus>
        <div class="card" style="width: auto">

          <form class="box">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" v-model="form.title" placeholder="e.g. alex@example.com" type="text">
              </div>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input class="input" v-model="form.description" placeholder="Description" type="text">
              </div>
            </div>

            <button class="button is-primary" @click="createNotice">Create Note</button>
          </form>
        </div>
      </b-modal>
    </section>
  </div>
</template>

<script>
import noticeAPI from "../../../apis/modules/notice_apis";
export default {
  name: "create-notice",
  data() {
    return {
      isComponentModalActive: false,
      form: {
        title: '',
        description: ''
      }
    }
  },

  methods: {
    handleForm() {
      this.isComponentModalActive = !this.isComponentModalActive
    },

   async createNotice() {
      try {
        let respond = await noticeAPI.create_notices(this.form)
      }catch (e) {

      }
    }
  }
}
</script>

<style scoped>

</style>
