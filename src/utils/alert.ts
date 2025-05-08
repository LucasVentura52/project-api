import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  showCloseButton: true,
  customClass: {
    popup: 'custom-toast'
  }
})

export const alert = {
  success: (message: string) =>
    Toast.fire({
      icon: 'success',
      title: message,
      customClass: {
        popup: 'toast-success'
      }
    }),

  error: (message: string) =>
    Toast.fire({
      icon: 'error',
      title: message,
      customClass: {
        popup: 'toast-error'
      }
    }),

  warning: (message: string) =>
    Toast.fire({
      icon: 'warning',
      title: message,
      customClass: {
        popup: 'toast-warning'
      }
    })
}
