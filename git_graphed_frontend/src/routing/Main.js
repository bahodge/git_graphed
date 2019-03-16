import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import UserRoutes from './UserRoutes';
import PublicRoutes from './PublicRoutes';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<UserRoutes />
				<PublicRoutes />
			</Switch>
		);
	}
}
