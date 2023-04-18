/* eslint-disable import/no-cycle */
import axios from "axios";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

// const baseURL = () => process.env.NEXT_PUBLIC_API_URL

const apiClient = axios.create({
  // baseURL: baseURL(),
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

apiClient.interceptors.request.use((request) => {
  NProgress.start();
  let userToken = localStorage.getItem("token") || null;
  if (userToken) request.headers.Authorization = `Bearer ${userToken}`;

  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.errors) return errorHandler(response);

    return response;
  },
  (err) => errorHandler(err)
);

const errorHandler = (err) => {
  NProgress.done();
  if (err.response) {
    const message = err.response.data.errorMessage || "";
    let error = {};

    switch (err.response.status) {
      case 400:
        // bad request
        error = {
          message: `[400] ${message}`,
        };
        break;
      case 401:
        // Unauthorized
        error = {
          message: `[401] Usuario no autorizado`,
        };
        break;
      case 408:
        // request timeout
        error = {
          message: `[408] Tiempo de espera agotado`,
        };
        break;
      case 498:
        // token invalid
        error = {
          message: `[498] Sesión vencida, debe ingresar de nuevo`,
        };
        break;
      case 500:
        // internal server error
        error = {
          message: `[500] Error interno en el servidor: ${message}`,
        };
        break;
      case 503:
        // service unavailable
        error = {
          message: `[503] Servicio no disponible: ${message}`,
        };
        break;

      default:
        // internal server error
        error = {
          message: `[XXX] Error interno en el servidor: ${message}`,
        };
        break;
    }

    console.error("api error 💥:>> ", error);

    return Promise.reject(new Error(error.message));
  }

  // error de conexión con el servidor.
  // if (err.message === "Network Error") {
  //   return Promise.reject(new Error("Network Error"));
  // }

  // error no administrado.
  // eslint-disable-next-line no-console
  console.error(`no administrado `, err);

  return Promise.reject(new Error("Error No Administrado"));
};

export default apiClient;
