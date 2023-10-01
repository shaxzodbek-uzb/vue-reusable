<script setup>
import { ref } from 'vue';
import Button from '@/components/UI/Button.vue';
import Input from '@/components/UI/Form/Input.vue'
import { useAuth } from '@websanova/vue-auth/src/v3'

const auth = useAuth()

const loginParams = ref({
    username: 'login@admin.uz',
    password: ''
})

const login = () => {
    auth
        .login({
            body: loginParams.value,
            data: loginParams.value,
            remember: true,
            fetchUser: true,
            staySignedIn: true,
        })
        .then((res) => {})
        .catch((res) => {
            // isLoading.value = false
            // loginData.value.form.errors = Object.fromEntries(res.data.errors?.map(item => [item.field, item.msg]))
        })
}

</script>

<template>
    <div>
        <h1>Login</h1>
        <div>
            <Input placeholder="User" v-model="loginParams.username"/>
            <Input placeholder="Password" v-model="loginParams.password" type="password"/>
            <Button @click="login">Login</Button>
        </div>
    </div>
</template>
