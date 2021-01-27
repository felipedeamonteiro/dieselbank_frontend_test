import axios from 'axios';

// Connection made with the api
const api = axios.create({
  baseURL: '',
});

export default api;
