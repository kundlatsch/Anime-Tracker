import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserHome from './pages/UserHome';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Register} path="/register" exact />
      <Route component={Login} path="/login" exact />
      <Route component={UserHome} path="/userHome" exact />
    </BrowserRouter>
  )
};

export default Routes;