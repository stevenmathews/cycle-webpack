import { makeDOMDriver } from '@cycle/dom'
import { makeRouterDriver, supportsHistory } from 'cyclic-router'
import { createHistory, createHashHistory } from 'history'

const history = supportsHistory()
  ? [createHistory(), {capture: true}]
  : [createHashHistory()]

export default {
  DOM: makeDOMDriver('#app'),
  router: makeRouterDriver(...history)
}
