import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://6647292e51e227f23ab14f18.mockapi.io/',
});

export default Api;