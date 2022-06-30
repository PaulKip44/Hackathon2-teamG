import axios from "axios";

const endpoint = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default endpoint;
