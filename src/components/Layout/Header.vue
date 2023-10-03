<script setup lang="ts">

//        IMPORTS       //

import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

//        INTERFACES    //

interface Route {
    name: string;
    path: string;
}

//        DECLARATIONS  //

const route = useRoute();
const routeList = ref<Route[]>([
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Users',
        path: '/users',
    },
    {
        name: 'Roles',
        path: '/roles',
    }
]);
</script>

<template>
    <header v-if="route.meta.layout !== 'full'" class="bg-white shadow">
        <nav class="flex mx-auto py-6 px-4 sm:px-6 lg:px-8 wrapper">
            <RouterLink v-for="route in routeList" :to="route.path" class="text-gray-500 hover:text-gray-900"
                :class="{ 'border-r border-gray-300': routeList.indexOf(route) !== routeList.length - 1 }">
                <h2 class="text-xl font-bold text-gray-900 mx-2 px-2">
                    {{ route.name }}
                </h2>
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.active-route {
    box-shadow: inset 0 -2px 0 0 #2563eb;
}
</style>