import gql from 'graphql-tag';

const USERS_QUERY = gql`
	query Users {
		users {
			id
			firstName
			lastName
		}
	}
`;

export default USERS_QUERY;
