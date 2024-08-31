import axios from "axios";
import { MAX_API_TIMEOUT } from "./env";
import { baseUrl } from "./constant";
import store from "@/store/store";

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: MAX_API_TIMEOUT,
});

apiClient.interceptors.request.use(
  async (config) => {
    try {
      // make it dynamic
      let token: string | null | undefined = store.getState().auth.token;

      if (token === undefined) {
        // for sign in and sign up use Guest Token

        token = null;
      } else {
        token = `Bearer ${token}`;
        config.headers.Authorization = token;
      }

      return config;
    } catch (error) {
      // Handle token retrieval error

      throw error;
    }
  },
  async (error) => {
    return await Promise.reject(error);
  }
);
export default apiClient;





// I am getting Signu issue