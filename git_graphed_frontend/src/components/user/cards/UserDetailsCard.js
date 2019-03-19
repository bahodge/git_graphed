import React from 'react';
import { Mutation, graphql, Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RepositorySimpleCard from '../../repositories/cards/RepositorySimpleCard';

import SYNC_USER_REPOSITORIES from '../../graphql/mutations/github/SyncUserRepositoriesMutation';

import USER_REPOSITORIES_QUERY from '../../graphql/queries/repositories/UserRepositoriesQuery';

const styles = {
	card: {
		minWidth: 275,
		maxWidth: 600
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	subTitle: {
		fontSize: 14
	},
	btn: {
		marginTop: 5
	}
};

const UserDetailsCard = (props) => {
	const { classes, user, user: { id, firstName, lastName, email, username } } = props;

	return (
		<Grid container justify="flex-start">
			<Card className={classes.card} key={id}>
				<CardContent>
					<Typography className={classes.title} color="textPrimary" component="h3" variant="h3" gutterBottom>
						{`@${username}`}
					</Typography>
					<Typography className={classes.subTitle} color="textSecondary" component="p">
						{`${firstName} ${lastName}`}
					</Typography>
					<Typography className={classes.subTitle} color="textSecondary" component="p">
						{`Email: ${email}`}
					</Typography>

					<Mutation mutation={SYNC_USER_REPOSITORIES} variables={{ id: id }}>
						{(syncUserRepositories, { loading, error }) => {
							if (loading) return <Button disabled>Syncing</Button>;
							if (error) return <p>Something Went Wrong!</p>;
							return <Button onClick={syncUserRepositories}>Sync Repos</Button>;
						}}
					</Mutation>
				</CardContent>
			</Card>
			<Query query={USER_REPOSITORIES_QUERY} variables={{ id: id }}>
				{({ loading, error, data }) => {
					if (loading) return <div>Loading...</div>;
					if (error) return <div>Something Went Wrong!</div>;
					return data.userRepositories.map((repository) => {
						return <RepositorySimpleCard repository={repository} user={user} />;
					});
				}}
			</Query>
		</Grid>
	);
};

UserDetailsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default graphql(SYNC_USER_REPOSITORIES, { name: 'syncUserRepositories' })(withStyles(styles)(UserDetailsCard));
