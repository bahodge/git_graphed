import gql from 'graphql-tag';

const REPOSITORY_WITH_DETAILS_QUERY = gql`
	query GetRepositoryQuery($id: ID!) {
		repository(id: $id) {
			id
			repoName
			repoPrivate
		}
	}
`;

export default REPOSITORY_WITH_DETAILS_QUERY;
