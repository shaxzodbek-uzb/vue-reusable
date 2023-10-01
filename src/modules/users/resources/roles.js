export default {
    routes: [
        {
            path: '/roles',
            name: 'roles',
            component: () => import('../views/roles/list.vue'),
        },
        {
            path: '/roles/create',
            name: 'roles.create',
            component: () => import('../views/roles/create.vue'),
        }
    ],
    columns: [
        'id',
        'name'
    ],
    api: {
        list: [
            {
                name: 'Admin'
            },
            {
                name: 'User'
            },
            {
                name: 'Guest'
            }
        ],
    }
}