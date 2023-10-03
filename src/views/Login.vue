<script setup>

//        IMPORTS       //

import { ref } from 'vue';
import Button from '@/components/UI/Button.vue';
import Input from '@/components/UI/Form/Input.vue'
import { useAuth } from '@websanova/vue-auth/src/v3'

//        DECLARATIONS  //

const auth = useAuth()

const loginParams = ref({
    username: 'login@admin.uz',
    password: ''
})

//        METHODS       //

const login = () => {
    auth
        .login({
            body: loginParams.value,
            data: loginParams.value,
            remember: true,
            fetchUser: true,
            staySignedIn: true,
        })
        .then((res) => { })
        .catch((res) => {
            // isLoading.value = false
            // loginData.value.form.errors = Object.fromEntries(res.data.errors?.map(item => [item.field, item.msg]))
        })
}

</script>

<template>
    <!-- OLD VERSION -->

    <!-- <div>
        <h1>Login</h1>
        <div>
            <Input placeholder="User" v-model="loginParams.username" />
            <Input placeholder="Password" v-model="loginParams.password" type="password" />
            <Button @click="login">Login</Button>
        </div>
    </div> -->

    <!-- NEW VERSION -->

    <main class="relative min-h-screen w-full bg-white">
        <div class="p-6" x-data="app">
            <div
                class="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
                <div x-show="!isLoginPage" class="space-y-4">
                    <header class="mb-3 text-2xl font-bold">Log in</header>
                    <Input placeholder="User" v-model="loginParams.username" />
                    <Input placeholder="Password" v-model="loginParams.password" type="password" />
                    <Button
                        class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                        @click="login">
                        LOG IN
                    </Button>
                </div>

                <div class="flex items-center space-x-4">
                    <hr class="w-full border border-gray-300" />
                    <div class="font-semibold text-gray-400">OR</div>
                    <hr class="w-full border border-gray-300" />
                </div>

                <footer>
                    <div class="grid grid-cols-2 gap-4">
                        <Button
                            class="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">FACEBOOK</Button>
                        <Button
                            class="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">GOOGLE</Button>
                    </div>

                    <div class="mt-8 text-sm text-gray-400">
                        By signing in to <span class="text-blue-500">VUE-REUSABLE</span> you agree to our
                        <a class="font-medium text-gray-500">Terms</a> and <a class="font-medium text-gray-500">Privacy
                            Policy</a>.
                    </div>
                </footer>
            </div>
        </div>
    </main>
</template>
