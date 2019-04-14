import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import UserSimpleCard from '../cards/UserSimpleCard';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import '../../../css/Users.css';

import USERS_QUERY from '../../graphql/queries/users/UsersQuery';

export default class Users extends Component {
	render() {
		return (
			<div className="users-container">
				 <Typography component="h1" variant="h3">
          Linked Users
        </Typography>
				<Divider className="users-divider"/>
				<div className="users-content-container">
				<Query query={USERS_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						const { users } = data;
						return (
							<div className="users-content">
								{users.map((user) => {
									return (
										<Link key={user.id} to={`/users/${user.id}`}>
											<UserSimpleCard user={user} />
										</Link>
									)})}
							</div>
						)}}
				</Query>
				</div>
			</div>
		);
	}
}
