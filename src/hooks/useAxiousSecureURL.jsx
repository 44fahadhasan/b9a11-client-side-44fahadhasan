import axios from "axios";

const axiosSecureURL = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiousSecureURL = () => {
  return axiosSecureURL;
};

export default useAxiousSecureURL;
