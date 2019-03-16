import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import ALL_USERS_QUERY from '../graphql/queries/users/AllUsersQuery';

export default class AllUsers extends Component {
	render() {
		return (
			<div>
				<Query query={ALL_USERS_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						const { allUsers } = data;
						return allUsers.map(({ firstName, lastName, id }) => {
							return (
								<Link key={id} to={`/users/${id}`}>
									<div>{`${firstName} ${lastName}`}</div>
								</Link>
							);
						});
					}}
				</Query>
			</div>
		);
	}
}
