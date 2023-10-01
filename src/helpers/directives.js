export default function (app){
    app.directive('permission', {
        inserted(el, binding, vnode, oldVnode) {
            // el.innerHTML =
            //     'name: ' + s(binding.name) + '<br>' +
            //     'value: ' + s(binding.value) + '<br>' +
            //     'expression: ' + s(binding.expression) + '<br>' +
            //     'argument: ' + s(binding.arg) + '<br>' +
            //     'modifiers: ' + s(binding.modifiers) + '<br>' +
            //     'vnode keys: ' + Object.keys(vnode).join(', ')
            if (vnode.context.$auth.user.permissions[binding.value] === undefined) {
                el.style.display = 'none'
            }
        },
        bind(el, binding, vnode, oldVnode) {
            if (vnode.context.$auth.user.permissions[binding.value] === undefined) {
                el.style.display = 'none'
            }
        },
        update(el, binding, vnode, oldVnode) {
    
            if (vnode.context.$auth.user.permissions[binding.value] === undefined) {
                el.style.display = 'none'
            }
        }
    })
    app.directive('uppercase', {
        bind(el, _, vnode) {
            el.addEventListener('input', (e) => {
                e.target.value = e.target.value.toUpperCase()
                vnode.componentInstance.$emit('input', e.target.value.toUpperCase())
            })
        }
    })

}    
