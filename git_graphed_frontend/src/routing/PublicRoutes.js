import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/shared/Landing';

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
		</Switch>
	);
};

export default PublicRoutes;
