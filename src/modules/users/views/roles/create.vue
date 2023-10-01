<script setup>
import Input from '@/components/UI/Form/Input.vue'
import Button from '@/components/UI/Button.vue'
import { useRouter } from 'vue-router'
import { ref, inject } from 'vue';

const router = useRouter()
const axios = inject('axios')
const data = ref({
    name: '',
    guard_name: 'web'
})

const create = () => {
    axios.post('/user/roles', data.value).then((response) => {
        router.push({name: 'roles'})
    })
}
</script>

<template>
    create role
    <Input v-model="data.name" />
    <Button @click="create">Create</Button>
</template>