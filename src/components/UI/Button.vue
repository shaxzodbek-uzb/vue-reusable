<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    onClick: {
        type: Function,
        default: () => {},
    },
})
const typeStyles = {
    'primary': 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    'success': 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
    'error': 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
}
const classes = computed(() => {
    return typeStyles[props.type]
})

const emit = defineEmits(['click'])

</script>
<template>
    <button :class="classes" @click="emit('click')">
        <slot></slot>
    </button>

</template>