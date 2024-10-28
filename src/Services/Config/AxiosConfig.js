// import axios from "axios";
// import API_URL from "./ApiConfig";

// // Create an axios instance
// const apiClient = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Adding interceptor for headers
// apiClient.interceptors.request.use(
//   (config) => {
//     // Get JWT token from localStorage
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       // Add token to Authorization header
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
