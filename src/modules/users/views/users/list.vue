<script setup>
import Table from '@/components/Resource/Table.vue'
import usersResource from '@/modules/users/resources/users'

</script>
<template>
    Users list
    <Table :resource="usersResource"></Table>
</template>