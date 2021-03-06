
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// My SPA's

import GlobalHomePage from '@/SFCR/layouts/client-side/Welcome'
import MasterLayout from '@/SFCR/layouts/admin/MasterLayouts'
import Register from '@/SFCR/layouts/client-side/auth/Register'
import Login from '@/SFCR/layouts/client-side/auth/Login'
import AdminPrivateRoute from '@/SFCR/layouts/admin/AdminPrivateRoute'
import Page403 from '@/SFCR/layouts/Error_Interceptors_State_Disp_Page/Page403'
import Page404 from '@/SFCR/layouts/Error_Interceptors_State_Disp_Page/Page404'

import { StoreWelcomes } from '@/SFCR/layouts/client-side/store/StoreWelcomes'
import CartPage from '@/SFCR/layouts/client-side/cart/Cart'

import CartContextProvider from './Contexts/CartContext';



// import Axios and implement Rule
import axios from 'axios'
//axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
  const apiToken = localStorage.getItem('auth_token_received_from_sanctum')
  config.headers.Authorization = apiToken ? `Bearer ${apiToken}` : ''
  return config
})

export const ReactApp = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GlobalHomePage} />
          <Route
            path="/store"
            name="StoreAppPageRoute"
            render={(props) => <StoreWelcomes {...props} />}
          />
          <Route
            path="/cart"
            name="CartFeaturePageRoute"
            render={ (props) => <CartPage {...props} /> }
          />
          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} />
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
          <Route path="/login">
            {localStorage.getItem('auth_token_received_from_sanctum') ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            {localStorage.getItem('auth_token_received_from_sanctum') ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )}
          </Route>
          <AdminPrivateRoute path="/admin" name="AdminRoute" />
        </Switch>
      </Router>
    </div>
  )
}
