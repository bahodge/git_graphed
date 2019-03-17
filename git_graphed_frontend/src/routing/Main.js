import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import UserRoutes from './UserRoutes';
// import PublicRoutes from './PublicRoutes';

import Landing from '../components/shared/Landing';
import AllUsers from '../components/user/AllUsers';
import UserWithDetails from '../components/user/UserWithDetails';
import UserRepositories from '../components/user/UserRepositories';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/users/:userId/repositories" component={UserRepositories} />
				<Route exact path="/users/:userId" component={UserWithDetails} />
				<Route exact path="/users" component={AllUsers} />
				<Route path="/landing" component={Landing} />
			</Switch>
		);
	}
}
