import axios from "axios";

export default axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  baseURL: "http://localhost:8080",
  headers: { "Content-type": "application/json" },
});
