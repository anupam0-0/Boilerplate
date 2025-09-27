import axios from "axios";
import { API_BASE } from "./apiEndpoints";

const axiosClient = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // This ensures cookies are sent with requests
});

// Response interceptor to handle auth errors
axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Clear user data on unauthorized and redirect to login
      if (typeof window !== "undefined") {
        // Import the store dynamically to avoid circular dependency
        import("@/store/authStore").then(({ useAuthStore }) => {
          useAuthStore.getState().clearUser();
        });
        window.location.href = "/login";
      }
    }
    console.error(err);
    return Promise.reject(err);
  }
);

export default axiosClient;
