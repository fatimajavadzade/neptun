import axios from "axios";
import { setupCache } from 'axios-cache-interceptor';
const BASE_URL=import.meta.env.VITE_BASE_URL;

const axiosInstance=setupCache(axios.create({
    baseURL:BASE_URL,
    timeout: 5000,
    headers:{
       'Content-Type':'Application/json'
    }
}));





export default axiosInstance;