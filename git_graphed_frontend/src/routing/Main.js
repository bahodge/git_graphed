import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllUsers from '../components/shared/AllUsers';
import User from '../components/shared/User';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/users/:userId" component={User} />
					<Route exact path="/" component={AllUsers} />
				</Switch>
			</div>
		);
	}
}
