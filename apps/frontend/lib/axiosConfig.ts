import axios from "axios";

export const AxiosAuth = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});
