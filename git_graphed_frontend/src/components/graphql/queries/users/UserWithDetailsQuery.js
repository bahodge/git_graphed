import gql from 'graphql-tag';

const USER_WITH_DETAILS_QUERY = gql`
	query UserQuery($id: ID!) {
		user(id: $id) {
			id
			firstName
			lastName
			email
			username
		}
	}
`;

export default USER_WITH_DETAILS_QUERY;
