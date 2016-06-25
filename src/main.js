import xs from 'xstream'
import Landing from 'pages/Landing'
import Router from 'components/Router'

const routes = {
  '/': Landing
}

export default function main (sources) {
  return Router({...sources, routes$: xs.of(routes)})
}
