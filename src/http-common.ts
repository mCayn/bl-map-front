import axios from 'axios';

export default axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  // baseURL: 'http://10.212.134.172:8080',
  baseURL: 'https://bl-kiosk-map.jls-sto3.elastx.net/',
  headers: { 'Content-type': 'application/json' },
});
