import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const USERS = gql`
	query users {
		id
		firstName
		lastName
	}
`;

const HelloReact = (props) => {
	return (
		<div>
			<Query query={USERS}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
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
