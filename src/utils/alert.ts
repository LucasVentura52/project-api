import Swal from "sweetalert2";

export const alert = {
  success: (message: string, title = "Sucesso") =>
    Swal.fire({ icon: "success", title, text: message }),

  error: (message: string, title = "Erro") =>
    Swal.fire({ icon: "error", title, text: message }),

  warning: (message: string, title = "Atenção") =>
    Swal.fire({ icon: "warning", title, text: message }),

  info: (message: string, title = "Informação") =>
    Swal.fire({ icon: "info", title, text: message }),
};
