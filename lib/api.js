import axios from "axios";

export const API_BASE_URL = "http://10.0.3.28:8060";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
