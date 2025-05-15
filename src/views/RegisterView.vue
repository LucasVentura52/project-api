<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card class="pa-6" width="100%" max-width="550" elevation="10" rounded="xl">
            <div class="text-center mb-4">
                <div class="emoji-icone">📝</div>
                <h2 class="text-h5 font-weight-bold mt-2">Criar sua conta</h2>
                <p class="text-subtitle-2 text-grey-darken-1">Preencha os dados abaixo para se cadastrar</p>
            </div>

            <v-form @submit.prevent="register" ref="formRef" v-model="valid">
                <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]"
                    prepend-inner-icon="mdi-email" variant="outlined" density="comfortable" />
                <v-text-field class="mt-2" v-model="senha" label="Senha" type="password" :rules="[rules.required]"
                    prepend-inner-icon="mdi-lock" variant="outlined" density="comfortable" />
                <v-text-field class="mt-2" v-model="senhaConfirmada" label="Confirmar Senha" type="password"
                    :rules="[rules.required, rules.confirmacao]" prepend-inner-icon="mdi-lock-check" variant="outlined"
                    density="comfortable" />
                <v-btn :loading="loading" :disabled="loading" color="success" type="submit" block class="mt-4"
                    size="large">
                    Cadastrar
                </v-btn>

                <v-btn type="submit" variant="text" block class="mt-2 text-decoration-underline"
                    @click="$router.push('/login')">
                    Já tenho conta
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<style scoped>
.emoji-icone {
    font-size: 48px;
    line-height: 1;
}

.text-decoration-underline {
    text-decoration: underline;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRegisterController } from '@/controllers/RegisterController'

const {
    email,
    senha,
    senhaConfirmada,
    erro,
    register,
    loading
} = useRegisterController()

const formRef = ref()
const valid = ref(false)

const rules = {
    required: (v: string) => !!v || 'Campo obrigatório',
    email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail inválido',
    confirmacao: (v: string) => v === senha.value || 'As senhas não coincidem'
}
</script>
