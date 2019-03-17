import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	subTitle: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
};
const Landing = (props) => {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					<h1>Git Graphed</h1>
				</Typography>
				<Typography className={classes.subTitle} color="textSecondary">
					<h3>Hey Everyone</h3>
				</Typography>
				<Typography component="p">
					The purpose of this project is to give users visualized data about git. Github is an amazing and
					colloborative platform but, it's data visualization implementations are garbage. There are a few
					libraries out there that offer some insight into your repos, but we're better like, by far.
					#graphs4days
				</Typography>
			</CardContent>
		</Card>
	);
};

Landing.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
