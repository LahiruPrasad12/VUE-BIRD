<template>
  <div class="container">
    <b-table :data="notices" :columns="columns"></b-table>
  </div>
</template>

<script>
import noticeAPI from "../../apis/modules/notice_apis";
export default {
  name: "index",
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
        let respond = (await noticeAPI.all_notices()).data.data
        this.notices = respond.map((e,index)=>({
          id : index+1,
          title : e.title,
          description : e.description
        }))
      }catch (e) {

      }
    }
  },

  async mounted() {
    await this.getAllNotices()
  }
}
</script>

<style scoped>

</style>
