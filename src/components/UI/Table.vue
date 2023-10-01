<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    columns: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <th v-for="column in columns">{{ item[column] }}</th>
            </tr>
        </tbody>
    </table>
</template>