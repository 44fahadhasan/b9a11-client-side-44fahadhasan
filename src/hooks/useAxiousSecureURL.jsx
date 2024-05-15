import axios from "axios";

const axiosSecureURL = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiousSecureURL = () => {
  axiosSecureURL.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("interceptor", error.response.status);
      }

      return Promise.reject(error);
    }
  );

  //
  return axiosSecureURL;
};

export default useAxiousSecureURL;
