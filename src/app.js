'use strict'

import { run } from '@cycle/xstream-run'
import main from './main'
import drivers from './drivers'

run(main, drivers)
