import axios from "axios";

const axiosOpenURL = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosURL = () => {
  return axiosOpenURL;
};

export default useAxiosURL;
