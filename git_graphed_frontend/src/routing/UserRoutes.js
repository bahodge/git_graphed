import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllUsers from '../components/user/AllUsers';
import UserWithDetails from '../components/user/UserWithDetails';
import UserRepositories from '../components/user/UserRepositories';

const UserRoutes = () => {
	return (
		<div>
			<Route exact path="/users/:userId/repositories" component={UserRepositories} />
			<Route exact path="/users/:userId" component={UserWithDetails} />
			<Route exact path="/users" component={AllUsers} />
		</div>
	);
};

export default UserRoutes;
