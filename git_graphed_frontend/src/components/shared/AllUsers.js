import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const ALL_USERS = gql`
	query Users {
		users {
			id
			firstName
			lastName
		}
	}
`;

export default class AllUsers extends Component {
	render() {
		return (
			<div>
				<Query query={ALL_USERS}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						return data.users.map(({ firstName, lastName, id }) => {
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
