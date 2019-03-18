import gql from 'graphql-tag';

const USERS_QUERY = gql`
	query Users {
		users {
			id
			username
		}
	}
`;

export default USERS_QUERY;
