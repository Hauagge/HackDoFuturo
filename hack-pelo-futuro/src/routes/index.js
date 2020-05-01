import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Deposito from '../pages/Deposito/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import DonatorDashboard from '../pages/DonatorDashboard/index';
import SupplierDashboard from '../pages/SupplierDashboard/index';
import UserDashboard from '../pages/UserDashboard/index';

// import DashBoard from '../pages/dashboard/index'
// import Repository from '../pages/repository/index'

const Routes= ()=>(
  <Switch>
    <Route path="/deposito"  component={Deposito}/>
  </Switch>
)
export default Routes;
