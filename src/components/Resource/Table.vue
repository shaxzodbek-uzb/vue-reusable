<script setup>
import Table from '@/components/UI/Table.vue'
import { defineProps, defineEmits, ref, inject } from 'vue'

const axios = inject('axios')

const props = defineProps({
    resource: {
        type: Object,
        required: true
    }
})

const items = ref([])

axios.get('/user/roles').then(({data: {items: loadedItems}}) => {
    console.log(loadedItems);
    items.value = loadedItems.data
    })
</script>

<template>
<Table :columns="resource.columns" :items="items"></Table>
</template>