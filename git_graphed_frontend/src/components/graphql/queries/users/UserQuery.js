import gql from 'graphql-tag';

const USER_QUERY = gql`
	query UserQuery($id: ID!) {
		user(id: $id) {
			id
			firstName
			lastName
			email
		}
	}
`;

export default USER_QUERY;
