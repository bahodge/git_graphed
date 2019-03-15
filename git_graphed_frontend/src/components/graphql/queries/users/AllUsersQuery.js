import gql from 'graphql-tag';

const ALL_USERS_QUERY = gql`
	query AllUsers {
		allUsers {
			id
			firstName
			lastName
		}
	}
`;

export default ALL_USERS_QUERY;
