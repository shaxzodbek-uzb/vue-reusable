<script setup>
import Table from '@/components/Resource/Table.vue'
import permissionsResource from '@/modules/users/resources/permissions'

</script>
<template>
    permissions list
    <Table :resource="permissionsResource"></Table>
</template>