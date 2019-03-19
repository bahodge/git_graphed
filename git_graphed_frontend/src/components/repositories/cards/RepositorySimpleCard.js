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

const RepositorySimpleCard = (props) => {
	const { classes, repository: { repoName, id }, user } = props;

	return (
		<Grid container justify="flex-start">
			<Card className={classes.card}>
				<CardContent>
					<Typography color="textSecondary" component="p" variant="p" gutterBottom>
						<Link to={`/users/${user.id}/repositories/${id}`}>{repoName}</Link>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

RepositorySimpleCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RepositorySimpleCard);
