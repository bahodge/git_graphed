import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import UserRoutes from './UserRoutes';
// import PublicRoutes from './PublicRoutes';

import Landing from '../components/shared/Landing';
import Users from '../components/user/pages/Users';
import User from '../components/user/pages/User';
import UserRepositories from '../components/user/pages/UserRepositories';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/users/:userId/repositories" component={UserRepositories} />
				<Route exact path="/users/:userId" component={User} />
				<Route exact path="/users" component={Users} />
				<Route path="/landing" component={Landing} />
				<Redirect from="/" to="/landing" />
			</Switch>
		);
	}
}
