import axios from "axios";

export const API_BASE_URL = "http://10.0.3.28:8060";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getStoredToken = () => {
  try {
    const stored = localStorage.getItem("auth_user");
    return stored ? (JSON.parse(stored)?.token ?? null) : null;
  } catch {
    return null;
  }
};

export const authHeaders = () => {
  const token = getStoredToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
