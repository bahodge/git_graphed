import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		minWidth: 275,
		maxWidth: 600
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 20
	},
	subTitle: {
		fontSize: 18
	},
	pos: {
		marginBottom: 12
	}
};
const Landing = (props) => {
	const { classes } = props;
	return (
		<Grid container justify="center">
			<Card className={classes.card}>
				<CardContent>
					<Typography color="textSecondary" component="h3" variant="h3" gutterBottom>
						Git Graphed
					</Typography>
					<Typography color="textSecondary" component="h5" variant="h5">
						Hey Everyone
					</Typography>
					<Typography component="p">
						The purpose of this project is to give users visualized data about git. Github is an amazing and
						colloborative platform but, it's data visualization implementations are garbage. There are a few
						libraries out there that offer some insight into your repos, but we're better like, by far.
						#graphs4days
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

Landing.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
