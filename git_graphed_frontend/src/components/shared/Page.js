import React from 'react';
import { Helmet } from 'react-helmet';

const PageHead = () => {
	return (
		<Helmet>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
		</Helmet>
	);
};

const Page = ({ children }) => {
	return (
		<div>
			<PageHead />
			<div className="ui container-fluid">{children}</div>
		</div>
	);
};

export default Page;
