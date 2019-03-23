import gql from "graphql-tag";

const REPOSITORY_WITH_DETAILS_QUERY = gql`
  query GetRepositoryQuery($id: ID!) {
    repository(id: $id) {
      id
      repoName
      repoPrivate
      fullname
      htmlUrl
      description
      language
      defaultBranch
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      size
      forks
      openIssues
      watchers
      fork
      hasIssues
      hasProjects
      hasDownloads
      hasWiki
      hasPages
      archived
      repoCreated_at
      repoUpdated_at
      repoPushed_at
    }
  }
`;

export default REPOSITORY_WITH_DETAILS_QUERY;
