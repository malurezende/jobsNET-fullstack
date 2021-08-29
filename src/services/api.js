import axios from "axios";

const api = axios.create({
  baseURL: "https://gamajobsnet.herokuapp.com/",
});

export default api;