<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card class="pa-6 text-center" width="100%" max-width="550" elevation="10" rounded="xl">
            <div class="mb-4">
                <div class="emoji-icone">🎉</div>
                <h2 class="text-h5 font-weight-bold mt-2">Seja bem-vindo(a)!</h2>
                <p class="text-subtitle-2 text-grey-darken-1">
                    <strong>{{ usuario.email }}</strong>, seu token expira em:
                </p>
                <p class="text-body-1 mt-1">
                    <strong>{{ usuario.expiracao }}</strong>
                </p>
            </div>

            <v-btn color="primary" size="large" class="mt-4" @click="logout">Sair</v-btn>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usuario = ref<{ email: string, expiracao: string }>({ email: '', expiracao: '' })

onMounted(() => {
    const dados = localStorage.getItem('usuario')
    if (!dados) {
        router.push('/login')
        return
    }

    try {
        const user = JSON.parse(dados)
        usuario.value.email = user.email

        const data = new Date(user.expiracao)
        const dataFormatada = data.toLocaleDateString('pt-BR')
        const horaFormatada = data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        })

        usuario.value.expiracao = `${dataFormatada} às ${horaFormatada}`
    } catch {
        router.push('/login')
    }
})

const logout = () => {
    localStorage.removeItem('usuario')
    router.push('/login')
}
</script>

<style scoped>
.emoji-icone {
    font-size: 48px;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-6px);
    }
}
</style>