import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ALL_USERS = gql`
	query Users {
		users {
			id
			firstName
			lastName
		}
	}
`;

const ONE_USER = gql`
	query User($id: ID!) {
		user(id: $id) {
			id
			firstName
			lastName
			email
		}
	}
`;

export default class HelloReact extends Component {
	state = {
		showUsers: false,
		showOneUser: false
	};

	showAllUsers = () => {
		return (
			<div>
				<Query query={ALL_USERS}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						return data.users.map(({ firstName, lastName, id }) => (
							<div key={id}>{`${id} ${firstName} ${lastName}`}</div>
						));
					}}
				</Query>
			</div>
		);
	};

	showOneUser = (id) => {
		return (
			<div>
				<Query query={ONE_USER} variables={{ id: id }}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading...maybe, idk</p>;
						if (error) return <p>Error :(</p>;
						const { firstName, lastName, id, email } = data.user;
						return (
							<div>
								<h4>{`${firstName} ${lastName}`}</h4>
								<p>{`${id} - ${email}`}</p>
							</div>
						);
					}}
				</Query>
			</div>
		);
	};

	handleShowAllUsers = () => {
		const { showUsers } = this.state;
		if (showUsers) {
			this.setState({ showUsers: false });
		} else {
			this.setState({ showUsers: true });
		}
	};

	handleShowOneUser = () => {
		const { showOneUser } = this.state;
		if (showOneUser) {
			this.setState({ showOneUser: false });
		} else {
			this.setState({ showOneUser: true });
		}
	};

	render() {
		const { showUsers, showOneUser } = this.state;
		const hideUsersText = 'Hide Users!';
		const showUsersText = 'Show Users!';
		const hideOneUserText = 'Hide User!';
		const showOneUserText = 'Show User!';
		return (
			<div>
				<button onClick={this.handleShowAllUsers}>{showUsers ? hideUsersText : showUsersText}</button>
				{showUsers ? this.showAllUsers() : null}

				<button onClick={this.handleShowOneUser}>{showUsers ? hideOneUserText : showOneUserText}</button>
				{showOneUser ? this.showOneUser(1) : null}
			</div>
		);
	}
}
