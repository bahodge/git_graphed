import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
	card: {
		minWidth: 275,
		maxWidth: 600,
		margin: 10
	},
	title: {
		fontSize: 12
	},
	subTitle: {
		fontSize: 10
	}
};

const RepositoryWithDetailsCard = (props) => {
	const { classes, repository: { repoName, id, repoPrivate }, user } = props;

	return (
		<Grid container justify="flex-start">
			<Card className={classes.card}>
				<CardContent>
					<Typography color="textSecondary" component="p" gutterBottom>
						Repository Name: {repoName}
					</Typography>
					<Typography color="textSecondary" component="p" gutterBottom>
						Private Repository: {repoPrivate}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

RepositoryWithDetailsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RepositoryWithDetailsCard);
