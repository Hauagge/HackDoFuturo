import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Deposito from '../pages/Deposito/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

// import DashBoard from '../pages/dashboard/index'
// import Repository from '../pages/repository/index'

<<<<<<< HEAD
const Routes= ()=>(
  <Switch>
    <Route path="/deposito"  component={Deposito}/>
  </Switch>
)
=======
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/deposito" component={Deposito} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</Switch>
	</BrowserRouter>
);
>>>>>>> 133e217e9543402ae0c9efb31a7bc3c9287203ee
export default Routes;
