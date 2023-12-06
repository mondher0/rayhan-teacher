import axios from "axios";
import { getCookie } from "cookies-next";

// base url
export const baseUrl = "https://back-dev.rayhaneelearning.com/api";

// get local date and time
export const getLocalDate = (date) => {
  const dateObj = new Date(date);
  // Format the Date object to the desired format
  const formattedDate = `${("0" + dateObj.getDate()).slice(-2)}/${(
    "0" +
    (dateObj.getMonth() + 1)
  ).slice(-2)}/${dateObj.getFullYear().toString().slice(-2)}`;
  const formattedTime = `${("0" + dateObj.getHours()).slice(-2)}:${(
    "0" + dateObj.getMinutes()
  ).slice(-2)}`;
  return { formattedDate, formattedTime };
};

// axios instance
const axiosInstance = axios.create();
const TOKEN_KEY = "token";
axiosInstance.interceptors.request.use((request) => {
  const token = getCookie(TOKEN_KEY);
  console.log(token);
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
export default axiosInstance;