import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import UserSimpleCard from '../cards/UserSimpleCard';

import USERS_QUERY from '../../graphql/queries/users/UsersQuery';

export default class Users extends Component {
	render() {
		return (
			<div>
				<Query query={USERS_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						const { users } = data;
						return users.map((user) => {
							return (
								<Link key={user.id} to={`/users/${user.id}`}>
									<UserSimpleCard user={user} />
								</Link>
							);
						});
					}}
				</Query>
			</div>
		);
	}
}
