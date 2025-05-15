import {
  AuthRepository,
  type LoginPayload,
  type RegisterPayload,
} from "@/api/AuthRepository";

export const AuthService = {
  async login(payload: LoginPayload) {
    try {
      const response = await AuthRepository.login(payload);
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.mensagem || "Usuário ou senha inválidos!";
    }
  },

  async register(payload: RegisterPayload) {
    try {
      const response = await AuthRepository.register(payload);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const erros = error.response.data.errors;
        const mensagens = Object.values(erros).flat().join("\n");
        throw mensagens;
      }

      throw error.response?.data || "Erro inespeado ao cadastrar.";
    }
  },
};
