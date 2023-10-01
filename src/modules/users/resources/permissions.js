export default {
    routes: [
        {
            path: '/permissions',
            name: 'permissions',
            component: () => import('../views/permissions/list.vue'),
        }
    ],
    columns: [
        'name',
        'active'
    ],
    api: {
        list: [
            {
                name: 'Create user',
                active: true
            },
            {
                name: 'Update user',
                active: false
            },
            {
                name: 'Delete user',
                active: true
            }
        ],
    }
}