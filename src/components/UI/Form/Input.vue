<script setup>
import {ref, watch} from 'vue'
const props = defineProps({
    placeholder: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

watch(value, (newValue) => {
    emit('update:modelValue', newValue)
})

</script>

<template>
    <!-- tailwind input classes -->
    <input
        :type="type"
        :placeholder="placeholder"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="value">
</template>