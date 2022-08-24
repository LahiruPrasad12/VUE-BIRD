export default {
  methods: {
    danger(message) {
      this.$buefy.toast.open({
        duration: 500,
        message: `${message}`,
        type: 'is-danger',
      })
    },
    success(message) {
      this.$buefy.toast.open({
        message: `${message}`,
        type: 'is-success'
      })
    },
  },
}
