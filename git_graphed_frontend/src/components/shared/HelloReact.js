import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const USERS = gql`
	query Users {
		users {
			id
			firstName
			lastName
		}
	}
`;

const HelloReact = () => {
	return (
		<div>
			<Query query={USERS}>
				{({ loading, error, data }) => {
					if (loading) console.log(USERS);
					if (loading) return <p>Loading...maybe, idk</p>;
					if (error) return <p>Error :(</p>;
					return data.users.map(({ firstName, lastName, id }) => (
						<div key={id}>{`${firstName} ${lastName}`}</div>
					));
				}}
			</Query>
		</div>
	);
};

export default HelloReact;
