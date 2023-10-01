export default {
    routes: [
        {
            path: '/users',
            name: 'users',
            component: () => import('../views/users/list.vue'),
        }
    ],
    columns: [
        'full_name',
        'role',
        'birth_date',
    ],
    api: {
        list: [
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            },
            {
                full_name: 'Shaxzodbek Qambaraliyev',
                role: 'Admin',
                birth_date: '1999-05-05',
            }
        ]
    }
}