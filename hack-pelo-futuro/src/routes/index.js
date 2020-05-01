import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Deposito from '../pages/Deposito/index'

// import DashBoard from '../pages/dashboard/index'
// import Repository from '../pages/repository/index'

const Routes= ()=>(
  <Switch>
    <Route path="/deposito"  component={Deposito}/>
  </Switch>
)
export default Routes;
