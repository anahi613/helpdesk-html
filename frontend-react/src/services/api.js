import axios from "axios";

const api = axios.create({
  baseURL: "https://helpdesk-html.onrender.com",
});

export default api;
