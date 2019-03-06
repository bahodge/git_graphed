import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const USER = gql`
	query User($id: ID!) {
		user(id: $id) {
			id
			firstName
			lastName
			email
		}
	}
`;

export default class User extends Component {
	render() {
		const { userId: id } = this.props.match.params;

		return (
			<div>
				<Query query={USER} variables={{ id: id }}>
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
