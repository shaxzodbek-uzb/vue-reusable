<script setup lang="ts">

//        IMPORTS       //

import { RouterView, useRoute } from 'vue-router'
import Header from '@/components/Layout/Header.vue'

//        DECLARATIONS  //

const router = useRoute()

</script>

<template>
  <Header />
  <div :class="{
    'p-8': router?.meta?.layout !== 'full'
  }">
    <RouterView />
  </div>
</template>
