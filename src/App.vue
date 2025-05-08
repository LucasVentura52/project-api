<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.toast-success {
  background-color: #2e7d32 !important;
  color: #fff !important;
}

.toast-error {
  background-color: #c62828 !important;
  color: #fff !important;
}

.toast-warning {
  background-color: #f9a825 !important;
  color: #000 !important;
}

.swal2-icon,
.swal2-close,
.swal2-title {
  color: inherit !important;
}

.swal2-close {
  filter: brightness(200%);
}

.swal2-timer-progress-bar {
  background: rgba(255, 255, 255, 0.7);
}

.swal2-icon {
  color: #fff !important;
  border: 0.25em solid rgba(255, 255, 255, 0.4) !important;
  background-color: transparent !important;
}

.swal2-icon::before,
.swal2-icon::after {
  display: none !important;
}

.swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
  background-color: #fff !important;
}

.swal2-icon.swal2-success .swal2-success-ring {
  border: 0.25em solid rgba(255, 255, 255, 0.4) !important;
}

.swal2-icon.swal2-success [class^='swal2-success-line'] {
  background-color: #fff !important;
}

.swal2-icon.swal2-warning {
  border: 0.25em solid rgba(255, 255, 255, 0.4) !important;
}
</style>