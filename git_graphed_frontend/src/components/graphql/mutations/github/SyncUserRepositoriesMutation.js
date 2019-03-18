import gql from 'graphql-tag';

const SYNC_USER_REPOSITORIES = gql`
	mutation SyncUserRepositories($id: ID!) {
		syncUserRepositories(id: $id) {
			id
		}
	}
`;

export default SYNC_USER_REPOSITORIES;
