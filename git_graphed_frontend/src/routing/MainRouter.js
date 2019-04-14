import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../components/shared/Landing';
import Users from '../components/user/pages/Users';
import User from '../components/user/pages/User';
import UserRepositories from '../components/user/pages/UserRepositories';
import Repository from '../components/repositories/pages/Repository';
import '../css/Main.css';

const MainRouter = () => (
	<div className="main-content">
		<Switch>
			<Route exact path="/users/:userId/repositories/:repositoryId" component={Repository} />
			<Route exact path="/users/:userId/repositories" component={UserRepositories} />
			<Route exact path="/users/:userId" component={User} />
			<Route exact path="/users" component={Users} />
			<Route path="/landing" component={Landing} />
			<Redirect from="/" to="/landing" />
		</Switch>
	</div>
)
export default MainRouter;