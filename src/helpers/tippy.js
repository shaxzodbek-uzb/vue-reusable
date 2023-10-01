import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'

const tippyOptions =
{
  directive: 'tippy',
  component: 'tippy',
  defaultProps: {
    placement: 'auto',
    allowHTML: true,
    animation: 'scale-subtle',
    arrow: false,
    delay: [150, 0],
    duration: [75, 75],
    touch: ['hold', 300],
  },
}

export default (app) => {
  app.use(VueTippy, tippyOptions)
}