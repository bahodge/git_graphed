import React, { Component } from "react";
import { Query } from "react-apollo";
// import { Link } from 'react-router-dom';

import USER_REPOSITORIES_QUERY from "../../graphql/queries/repositories/UserRepositoriesQuery";

export default class UserRepositories extends Component {
  render() {
    const { userId: id } = this.props.match.params;
    return (
      <div>
        <Query query={USER_REPOSITORIES_QUERY} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...maybe, idk</p>;
            if (error) return <p>Error</p>;

            const { userRepositories } = data;
            return (
              <ul>
                {userRepositories.map(({ id, repoName, repoPrivate }) => (
                  <li key={id}>
                    <h4>{`${repoName}`}</h4>
                    <p>{`Private Repository: ${repoPrivate}`}</p>
                  </li>
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}
