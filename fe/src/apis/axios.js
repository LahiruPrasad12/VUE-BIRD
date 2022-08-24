import axios from "axios";

const instance = axios.create({
  baseURL: config.env.baseURL
});

export default instance
