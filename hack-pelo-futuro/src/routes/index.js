import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Deposito from '../pages/Deposito/index';
import SignIn from '../pages/SignIn/index';

// import DashBoard from '../pages/dashboard/index'
// import Repository from '../pages/repository/index'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/deposito" component={Deposito} />
			<Route path="/signin" component={SignIn} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
