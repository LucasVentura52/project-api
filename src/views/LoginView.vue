<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card class="pa-6" width="100%" max-width="550" elevation="10" rounded="xl">
            <div class="text-center mb-4">
                <div class="emoji-icone">😊</div>
                <h2 class="text-h5 font-weight-bold mt-2">Bem-vindo de volta</h2>
                <p class="text-subtitle-2 text-grey-darken-1">Acesse sua conta abaixo</p>
            </div>

            <v-form @submit.prevent="login" ref="formRef" v-model="valid">
                <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]"
                    prepend-inner-icon="mdi-email" variant="outlined" density="comfortable" />
                <v-text-field class="mt-2" v-model="senha" label="Senha" type="password" :rules="[rules.required]"
                    prepend-inner-icon="mdi-lock" variant="outlined" density="comfortable" />
                <v-btn color="primary" type="submit" block class="mt-4" size="large" :loading="loading"
                    :disabled="loading">
                    Entrar
                </v-btn>


                <v-btn type="submit" variant="text" block class="mt-2 text-decoration-underline"
                    @click="router.push('/cadastrar')">
                    Criar uma conta
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthController } from '@/controllers/AuthController'

const { email, senha, erro, login, loading } = useAuthController()
const router = useRouter()
const valid = ref(false)
const formRef = ref()

const rules = {
    required: (v: string) => !!v || 'Campo obrigatório',
    email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail inválido'
}
</script>

<style scoped>
.text-decoration-underline {
    text-decoration: underline;
}

.emoji-icone {
    font-size: 48px;
    line-height: 1;
}
</style>