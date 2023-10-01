import VueTheMask, { mask } from 'vue-the-mask';

export default function (app){
    app.use(VueTheMask)
    app.directive(mask)
}