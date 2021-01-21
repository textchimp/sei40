import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export default {

  getFlight( id ){
    return axios.get(`${ API_BASE_URL }/flights/${ id }`);
  },

};
