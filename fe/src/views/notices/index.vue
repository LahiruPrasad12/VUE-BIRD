<template>

  <div class="container">
    <b-button type="is-primary" @click="openModel">Create Notice</b-button>
    <b-table
      :data="notices"
      ref="noticeTable"
      :loading="is_table_loading"
      hover
      responsive
    >
      <b-table-column field="id" label="ID">
        <template v-slot:header="{ column }">
          <b-tooltip :label="column.label" append-to-body dashed>
            {{ column.label }}
          </b-tooltip>
        </template>
        <template v-slot="props">
          {{ props.row.id }}
        </template>
      </b-table-column>
      <b-table-column field="title" label="Title">
        <template v-slot:header="{ column }">
          <b-tooltip :label="column.label" append-to-body dashed>
            {{ column.label }}
          </b-tooltip>
        </template>
        <template v-slot="props">
          {{ props.row.title }}
        </template>
      </b-table-column>

      <b-table-column field="description" label="Description">
        <template v-slot:header="{ column }">
          <b-tooltip :label="column.label" append-to-body dashed>
            {{ column.label }}
          </b-tooltip>
        </template>
        <template v-slot="props">
          {{ props.row.description }}
        </template>
      </b-table-column>
      <b-table-column field="action" label="Action">
        <template v-slot="props">
          <b-button @click="editeColumn(props.row)">Edit</b-button>
        </template>
      </b-table-column>

    </b-table>
    <createNotice ref="create_form"/>
    <editeNotice ref="edit_form"/>
  </div>
</template>

<script>
import createNotice from "./modals/create-notice";
import editeNotice from "./modals/edit-notices";

import noticeAPI from "../../apis/modules/notice_apis";
export default {
  name: "index",
  components :{
    createNotice,
    editeNotice
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
        },
        {
          field: 'action',
          label: 'Action',
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
      this.$refs.create_form.openForm()
    },

    closeModel(){
      this.getAllNotices()
    },

    editeColumn(data){
      this.$refs.edit_form.openForm(data)
      console.log(data)
    }
  },

  async mounted() {
    await this.getAllNotices()
  }
}
</script>

<style scoped>

</style>
