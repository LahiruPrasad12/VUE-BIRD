<template>

  <div class="container">
    <b-button type="is-primary" @click="openModel">Create Notice</b-button>
    <b-table
      :data="notices"
      :columns="fields"
      ref="noticeTable"
      :loading="is_table_loading"
      hover
      responsive
    >

    </b-table>

<!--    <b-table-->
<!--      ref="table"-->
<!--      :current-page="currentPage"-->
<!--      :fields="fields"-->
<!--      :filter="filter"-->
<!--      :filter-included-fields="filterOn"-->
<!--      :items="getList"-->
<!--      :per-page="pagination.perPage"-->
<!--      :sort-by.sync="sortBy"-->
<!--      :sort-desc.sync="sortDesc"-->
<!--      :sort-direction="sortDirection"-->
<!--      class="mobile_table_css"-->

<!--      hover-->
<!--      responsive-->
<!--    >-->
<!--    </b-table>-->
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
      fields: [
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
        }
      ],
      notices : [],
      is_table_loading:false
    }
  },

  methods:{
    async getAllNotices(){
      try {
        this.is_table_loading = true
        let respond = (await noticeAPI.all_notices()).data.data.all_notices
        this.notices = respond.map((e,index)=>({
          id : index+1,
          title : e.title,
          description : e.description
        }))
      }catch (e) {

      }
      this.is_table_loading = false
    },

    openModel (){
      this.$refs.form.openForm()
    },

    closeModel(){
      this.getAllNotices()
    }
  },

  async mounted() {
    await this.getAllNotices()
  }
}
</script>

<style scoped>

</style>
