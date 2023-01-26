/* @refresh reload */
import {HopeProvider} from '@hope-ui/solid'
import {Router} from '@solidjs/router'
import {render} from 'solid-js/web'

import App from './App'
import {hopeThemeConfig} from './config/hopeTheme.config'


render(
  () => (
    <HopeProvider config={hopeThemeConfig}>
      <Router>
        <App />
      </Router>
    </HopeProvider>
  ),
  document.getElementById('root') as HTMLElement
)
