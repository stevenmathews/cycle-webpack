import xs from 'xstream'
import dropRepeats from 'xstream/extra/dropRepeats'
import { div } from '@cycle/dom'
import { eqProps, prop, propOr } from 'ramda'
import { requireSources } from 'utils'

const equalPaths = eqProps('path')
const loading = div('.loading', 'Loading...')

const callComponent = sources => ({path, value}) => {
  const component = value({...sources, router: sources.router.path(path)})
  return {
    ...component,
    DOM: component.DOM.startWith(loading)
  }
}

export default function Router (sources) {
  requireSources('Router', sources, 'routes$')

  const component$ = sources.routes$
    .map(routes => sources.router.define(routes))
    .flatten()
    .compose(dropRepeats(equalPaths))
    .map(callComponent(sources))
    .remember()

  const pluck = key => component$
    .map(propOr(xs.empty(), key))
    .flatten()

  return {
    pluck,
    DOM: component$.map(prop('DOM')).flatten(),
    route$: pluck('route$')
  }
}
