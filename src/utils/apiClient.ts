import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
