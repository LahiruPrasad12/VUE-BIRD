import api from "../axios";
const baseURL = '/api/v1'

export default {
  all_notices: () => api.get(`${baseURL}/notices`)
}
