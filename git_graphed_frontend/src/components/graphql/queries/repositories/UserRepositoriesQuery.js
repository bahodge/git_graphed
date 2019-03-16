import gql from 'graphql-tag';

const USER_REPOSITORIES_QUERY = gql`
	query UserRepositoriesQuery($id: ID!) {
		userRepositories(id: $id) {
			id
			repoName
			repoPrivate
		}
	}
`;

export default USER_REPOSITORIES_QUERY;
