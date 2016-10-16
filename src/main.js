import xs from 'xstream'
import Landing from 'pages/Landing'
import Router from 'components/Router'

const routes = {
  '/': Landing
}

export default function main (sources) {
  const page = Router({...sources, routes$: xs.of(routes)})
  return {
    DOM: page.DOM
  }
}
