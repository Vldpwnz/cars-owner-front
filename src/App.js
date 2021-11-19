import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  HashRouter,
  NavLink,
  withRouter,
} from 'react-router-dom'

import { AnimatedSwitch, spring } from 'react-router-transition'

import { 
  UsersPage,
  UserPage, 
  CarsPage,
  CarPage, 
} from './pages'

import { Header } from './components';

import './App.css'

const routes = [
  { path: '/', Component: UsersPage },
  { path: '/users', Component: UsersPage },
  { path: '/users/:id/cars', Component: UserPage },
  { path: '/cars', Component: CarsPage },
  { path: '/cars/:id', Component: CarPage },
]

const App = () => {
  const renderRoute = (path, Component) => {
    if (path === '/') {
        return (
            <Route
                key={path}
                exact
                path={path}
                render={() => <Redirect to="/users" />}
            />
        )
    }

    return (
        <Route
            exact
            key={path}
            path={path}
            component={Component}
        />
    )
}
  const AnimatedRouting = withRouter(({ location }) => (

    <>
     <Header location={location} />
          <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: spring(1, { stiffness: 250, damping: 30 }) }}
              atActive={{ opacity: spring(1, { stiffness: 250, damping: 30 }) }}
              mapStyles={(styles) => { return { opacity: styles.opacity }}}
              className="switch-wrapper"
          >
              {routes.map(({ path, Component }) => renderRoute(path, Component))}
          </AnimatedSwitch>
      </>
))

  return ( 

    <Suspense fallback={null}>
      <HashRouter>
      <AnimatedRouting />
      </HashRouter>
    </Suspense>
    // <div className="App">
    //   <UsersPage></UsersPage>
    // </div>
  )
}

export default App
