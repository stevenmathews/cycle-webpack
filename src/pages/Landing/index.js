import xs from 'xstream'
import { p } from '@cycle/dom'

export default function Landing () {
  return {
    DOM: xs.of(p('Landing page'))
  }
}
