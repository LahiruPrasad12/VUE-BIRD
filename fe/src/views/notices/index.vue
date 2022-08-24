<template>

  <div class="container">
    <b-button type="is-primary" @click="openModel">Create Notice</b-button>
    <b-table :data="notices" :columns="columns" ></b-table>
    <createNotice ref="form"/>
  </div>
</template>

<script>
import createNotice from "./modals/create-notice";
import noticeAPI from "../../apis/modules/notice_apis";
export default {
  name: "index",
  components :{
    createNotice
  },
  data(){
    return {
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'title',
          label: 'Title',
        },
        {
          field: 'description',
          label: 'Description',
        },
      ],
      notices : []
    }
  },

  methods:{
    async getAllNotices(){
      try {
        let respond = (await noticeAPI.all_notices()).data.data.all_notices
        this.notices = respond.map((e,index)=>({
          id : index+1,
          title : e.title,
          description : e.description
        }))
      }catch (e) {

      }
    },

    openModel (){
      this.$refs.form.handleForm()
    }
  },

  async mounted() {
    await this.getAllNotices()
  }
}
</script>

<style scoped>

</style>
