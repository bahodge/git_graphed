import React, { Component } from "react";
import { Query } from "react-apollo";
import UserDetailsCard from "../cards/UserDetailsCard";

import USER_WITH_DETAILS_QUERY from "../../graphql/queries/users/UserWithDetailsQuery";

export default class User extends Component {
  render() {
    const { userId: id } = this.props.match.params;
    console.log(this.props);
    return (
      <div>
        <Query query={USER_WITH_DETAILS_QUERY} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...maybe, idk</p>;
            if (error) return <p>Error</p>;

            return <UserDetailsCard user={data.user} />;
          }}
        </Query>
      </div>
    );
  }
}
