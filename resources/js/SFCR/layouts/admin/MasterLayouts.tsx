import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

// Styles
import '@css/sbadmin/styles.css'
import '@/sbadmin/scripts.js'

// Import React Router
import routes from '@/ReactRouter/Routes'

const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <Switch>
              {routes.map((routeArg, idxArg) => {
                return (
                  routeArg.component && (
                    <Route
                      key={idxArg}
                      path={routeArg.path} //const routes = [{path:,}]
                      exact={routeArg.exact} //const routes = [{exact:,}]
                      name={routeArg.name} //const routes = [{name:,}]
                      render={
                        (props) => <routeArg.component {...props} />
                        //const routes = [{component:,}]
                      }
                    />
                  )
                )
              })}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MasterLayout
