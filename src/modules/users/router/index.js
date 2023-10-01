import rolesResource from '../resources/roles'
import usersResource from '../resources/users'
import permissionsResource from '../resources/permissions'

export default [
    ... rolesResource.routes,
    ... usersResource.routes,
    ... permissionsResource.routes,
]