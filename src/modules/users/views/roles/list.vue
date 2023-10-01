<script setup>
import Table from '@/components/Resource/Table.vue'
import rolesResource from '@/modules/users/resources/roles'

</script>
<template>
    Roles list
    <Table :resource="rolesResource"></Table>
</template>