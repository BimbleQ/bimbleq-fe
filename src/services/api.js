import axios from 'axios';

// Konfigurasi Axios
const API = axios.create({
    baseURL: 'http://localhost:5001/api', 
    withCredentials: true, 
});
export default API;