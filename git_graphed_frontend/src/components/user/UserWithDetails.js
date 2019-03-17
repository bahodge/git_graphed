import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import USER_WITH_DETAILS_QUERY from '../graphql/queries/users/UserWithDetailsQuery';

export default class UserWithDetails extends Component {
	render() {
		const { userId: id } = this.props.match.params;

		return (
			<div>
				<Query query={USER_WITH_DETAILS_QUERY} variables={{ id: id }}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error</p>;

						const { id, firstName, lastName, email } = data.user;

						return (
							<div>
								<h1>{`${firstName} ${lastName}`}</h1>
								<p>{`Email: ${email}`}</p>
							</div>
						);
					}}
				</Query>
				<Link to={`/users/${id}/repositories`}>User Repositories</Link>
			</div>
		);
	}
}
