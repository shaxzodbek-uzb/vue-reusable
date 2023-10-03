<script setup>

//        IMPORTS       //

import { defineProps } from 'vue';

//        DECLARATIONS  //

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
    <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg dark:border-gray-700 dark:bg-gray-800 w-[90%] mx-auto">
        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                    <th scope="col" class="p-4 text-gray-500" v-for="column in columns" style="text-transform: uppercase;">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr v-if="!items.length">
                    <td class="p-4 text-center" :colspan="columns.length">
                        <img src="https://cdn-icons-png.flaticon.com/128/7486/7486744.png" alt="No items found"
                            class="mx-auto w-[64px]" />
                        <p class="text-gray-400">No items found</p>
                    </td>
                </tr>
                <tr v-else class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="item in items">
                    <th class="p-4 w-4" v-for="column in columns">
                        {{ item[column] }}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>