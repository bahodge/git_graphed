import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import '../../css/Landing.css';

const Landing = (props) => {
	const { classes } = props;
	return (
		<div className="landing-cont">
			<Typography color="textSecondary" component="h3" variant="h3" gutterBottom>
				Git Graphed
			</Typography>
			<Divider/>
			<Typography color="textSecondary" component="h5" variant="h5" className="landing-header">
				Hey Everyone
			</Typography>
			<Typography component="p" variant="body1" className="landing-content">
				The purpose of this project is to give users visualized data about git. Github is an amazing and
				collaborative platform but, it's data visualization implementations are garbage. There are a few
				libraries out there that offer some insight into your repos, but we're better like, by far.
			</Typography>
			<Typography component="p" variant="subtitle1">
			#graphs4days
			</Typography>
		</div>				
	);
};

export default Landing;
