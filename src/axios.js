// axios
import axios from "axios";
import router from "./router";

const baseURL =
  process.env.VUE_APP_API_URL !== undefined
    ? process.env.VUE_APP_API_URL
    : "http://localhost:8000/";

const accessToken = localStorage.getItem("accessToken");
let axiosInstance = axios.create({
  baseURL: baseURL,
  // You can add your headers here
});

export const setAuthHeader = (token) => {
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (
      error.response.status === 401 ||
      error.response.data.detail === "Invalid token."
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("userInfo");
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

// Set the initial header from storage or something (should surround with try catch in actual app)
setAuthHeader(accessToken);

export default axiosInstance;
