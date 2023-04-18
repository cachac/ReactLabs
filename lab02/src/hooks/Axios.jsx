import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/Session";
import axios from "axios";

const useAxios = (initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { session } = useAuth();

  const apiClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin-": "*",
      Accept: "*/*",
      ...(session?.token && { Authorization: `Bearer ${session.token}` }),
    },
    timeout: 30000,
  });

  const runAxios = async (url, method = "get") => {
    setIsLoading(true);
    setIsError(false);
    apiClient[method](url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
        setIsError(true);
        toast.error(error.response.data.errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  return { data, isLoading, isError, runAxios };
};

export default useAxios;
