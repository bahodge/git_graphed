import gql from 'graphql-tag';

const UserWithDetailsQuery = gql`
	query UserQuery($id: ID!) {
		user(id: $id) {
			firstName
			lastName
			email
		}
	}
`;

export default UserWithDetailsQuery;
