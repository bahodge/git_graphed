import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import USER_QUERY from '../graphql/queries/users/UserQuery';

export default class User extends Component {
	render() {
		const { userId: id } = this.props.match.params;

		return (
			<div>
				<Query query={USER_QUERY} variables={{ id: id }}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error</p>;

						const { id, firstName, lastName, email } = data.user;

						return (
							<div>
								<h1>{`${firstName} ${lastName}`}</h1>
								<p>{`ID: ${id}`}</p>
								<p>{`Email: ${email}`}</p>
							</div>
						);
					}}
				</Query>
				<Link to={'/'}>Home</Link>
			</div>
		);
	}
}
