import React, { Component } from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import RepositoryTitleCard from "../cards/RepositoryTitleCard";
import RepositoryDetailsCard from "../cards/RepositoryDetailsCard";

import REPOSITORY_WITH_DETAILS_QUERY from "../../graphql/queries/repositories/RepositoryWithDetailsQuery";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 600,
    margin: 10
  },
  title: {
    fontSize: 12
  },
  subTitle: {
    fontSize: 10
  }
};

class Repository extends Component {
  render() {
    const { repositoryId: id } = this.props.match.params;
    return (
      <Grid container justify="flex-start">
        <Query query={REPOSITORY_WITH_DETAILS_QUERY} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...maybe, idk</p>;
            if (error) return <p>Error</p>;
            const { repository } = data;
            return (
              <div>
                <RepositoryTitleCard repository={repository} />
                <RepositoryDetailsCard repository={repository} />
              </div>
            );
          }}
        </Query>
      </Grid>
    );
  }
}

Repository.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Repository);
