import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import UserDetailsCard from '../cards/UserDetailsCard';

import USER_WITH_DETAILS_QUERY from '../../graphql/queries/users/UserWithDetailsQuery';

const User = (props) => {
	const { userId: id } = props.match.params;

	return (
		<div>
			<Query query={USER_WITH_DETAILS_QUERY} variables={{ id: id }}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...maybe, idk</p>;
					if (error) return <p>Error</p>;

					return <UserDetailsCard user={data.user} />;
				}}
			</Query>
			<Link to={`/users/${id}/repositories`}>User Repositories</Link>
		</div>
	);
};

export default User;
