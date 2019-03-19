import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RepositoryWithDetailsCard from '../cards/RepositoryWithDetailsCard';

import REPOSITORY_WITH_DETAILS_QUERY from '../../graphql/queries/repositories/RepositoryWithDetailsQuery';

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

class Repository extends Component {
	render() {
		const { repositoryId: id } = this.props.match.params;
		return (
			<div>
				<Query query={REPOSITORY_WITH_DETAILS_QUERY} variables={{ id: id }}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error</p>;
						console.log(data);
						return <div>Hello</div>;
						// return <RepositoryWithDetailsCard repository={repository} />;
					}}
				</Query>
			</div>
		);
	}
}

Repository.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Repository);
