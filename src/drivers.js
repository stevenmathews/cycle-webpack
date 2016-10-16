import { makeDOMDriver } from '@cycle/dom'
import { makeRouterDriver, supportsHistory } from 'cyclic-router'
import { createHistory, createHashHistory } from 'history'
import switchPath from 'switch-path'

const history = supportsHistory()
  ? [createHistory(), switchPath, {capture: true}]
  : [createHashHistory(), switchPath]

export default {
  DOM: makeDOMDriver('#app'),
  router: makeRouterDriver(...history)
}
