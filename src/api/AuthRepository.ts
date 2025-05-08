import { apiClient } from "@/utils/apiClient";

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface RegisterPayload {
  email: string;
  senha: string;
  senhaConfirmada: string;
}

export const AuthRepository = {
  login(payload: LoginPayload) {
    return apiClient.post("/Autenticacao/autenticar", payload);
  },

  register(payload: RegisterPayload) {
    return apiClient.post("/Autenticacao/registar", payload);
  },
};
