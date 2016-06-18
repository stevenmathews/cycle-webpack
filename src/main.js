import xs from 'xstream'
import { p } from '@cycle/dom'

export default function main (sources) {
  return {
    DOM: xs.of(p('cycle test'))
  }
}
