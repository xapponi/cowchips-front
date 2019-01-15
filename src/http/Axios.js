import axios from 'axios';

const options = {
  baseUrl: process.env.VUE_APP_BACKEND_URL
}

export default axios.create(options)
