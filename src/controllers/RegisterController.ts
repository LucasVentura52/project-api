import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "@/services/AuthService";
import { alert } from "@/utils/alert";

export function useRegisterController() {
  const email = ref("");
  const senha = ref("");
  const senhaConfirmada = ref("");
  const erro = ref("");
  const router = useRouter();
  const loading = ref(false);

  const register = async () => {
    erro.value = "";
    loading.value = true;
    try {
      await AuthService.register({
        email: email.value,
        senha: senha.value,
        senhaConfirmada: senhaConfirmada.value,
      });

      alert.success("Cadastro realizado com sucesso!");
      router.push("/login");
    } catch (e: any) {
      alert.error(e);
      erro.value = e;
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    senha,
    senhaConfirmada,
    erro,
    register,
    loading,
  };
}