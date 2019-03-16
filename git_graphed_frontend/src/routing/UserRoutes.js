import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllUsers from '../components/user/AllUsers';
import User from '../components/user/User';
import UserRepositories from '../components/user/UserRepositories';

const UserRoutes = () => {
	return (
		<Switch>
			<Route exact path="/users/:userId/repositories" component={UserRepositories} />
			<Route exact path="/users/:userId" component={User} />
			<Route exact path="/users" component={AllUsers} />
		</Switch>
	);
};

export default UserRoutes;
