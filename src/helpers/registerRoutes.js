export default function (router, moduleName = 'user', resourceName = 'users') {
    return [
        { path: `${resourceName}`, component: () => import(`@/modules/${moduleName}/views/${resourceName}/index.vue`) },
        { path: `${resourceName}/edit/:id`, component: () => import(`@/modules/${moduleName}/views/${resourceName}/edit.vue`) },
        { path: `${resourceName}/show/:id`, component: () => import(`@/modules/${moduleName}/views/${resourceName}/show.vue`) },
        { path: `${resourceName}/create`, component: () => import(`@/modules/${moduleName}/views/${resourceName}/create.vue`) },
    ]
}