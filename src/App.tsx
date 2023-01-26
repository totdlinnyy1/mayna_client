import {Container} from '@hope-ui/solid'
import {Route, Routes} from '@solidjs/router'
import type {Component} from 'solid-js'

import Header from './components/header/Header'
import CreateUserPage from './pages/createUser/CreateUser.page'

const App: Component = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/create-user' component={CreateUserPage} />
      </Routes>
    </Container>
  )
}

export default App
