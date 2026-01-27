import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
  },
});

/* =======================
   INTERCEPTOR TOKEN
======================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* =======================
   HELPER METHODS
======================= */
const request = async (method, url, data = null, params = null, config = {}) => {
  try {
    const response = await api({
      method,
      url,
      data,
      params,
      ...config,
    });
    return response.data;
  } catch (error) {
    const err = error.response?.data || {
      message: "Server error",
    };
    throw err;
  }
};

/* =======================
   EXPORT API METHODS
======================= */
export default {
  get: (url, params = {}, config = {}) =>
    request("get", url, null, params, config),

  post: (url, data = {}, config = {}) =>
    request("post", url, data, null, config),

  put: (url, data = {}, config = {}) =>
    request("put", url, data, null, config),

  delete: (url, config = {}) =>
    request("delete", url, null, null, config),

  postForm: (url, data = {}) =>
    request("post", url, data, null, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};
