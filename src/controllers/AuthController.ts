import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "@/services/AuthService";
import { alert } from "@/utils/alert";

export function useAuthController() {
  const email = ref("");
  const senha = ref("");
  const erro = ref("");
  const router = useRouter();

  const login = async () => {
    erro.value = "";
    try {
      const dados = await AuthService.login({
        email: email.value,
        senha: senha.value,
      });

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          email: email.value,
          token: dados.token,
          expiracao: dados.dataExpiracao,
        })
      );

      await router.push("/boas-vindas");
      alert.success("Login realizado com sucesso!");
    } catch (e: any) {
      alert.error(e);
      erro.value = e;
    }
  };

  return {
    email,
    senha,
    erro,
    login,
  };
}
