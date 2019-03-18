import gql from 'graphql-tag';

const USER_WITH_DETAILS_QUERY = gql`
	query UserQuery($id: ID!) {
		user(id: $id) {
			firstName
			lastName
			email
		}
	}
`;

export default USER_WITH_DETAILS_QUERY;
