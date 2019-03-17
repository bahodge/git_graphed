import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/shared/Landing';

const PublicRoutes = () => {
	return <Route path="/landing" component={Landing} />;
};

export default PublicRoutes;
