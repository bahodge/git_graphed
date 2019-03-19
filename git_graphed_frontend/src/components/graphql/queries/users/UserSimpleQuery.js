import gql from 'graphql-tag';

const USER_SIMPLE_QUERY = gql`
	query UserQuery($id: ID!) {
		user(id: $id) {
			id
			username
		}
	}
`;

export default USER_SIMPLE_QUERY;
