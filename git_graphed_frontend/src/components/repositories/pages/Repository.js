import React, { Component } from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import RepositoryTitleCard from "../cards/RepositoryTitleCard";
import RepositoryDetailsCard from "../cards/RepositoryDetailsCard";
import RepositoryFlagsCard from "../cards/RepositoryFlagsCard";

import REPOSITORY_WITH_DETAILS_QUERY from "../../graphql/queries/repositories/RepositoryWithDetailsQuery";

const styles = {
  root: {
    flexGrow: 1
  },
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Query query={REPOSITORY_WITH_DETAILS_QUERY} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...maybe, idk</p>;
            if (error) return <p>Error</p>;
            const { repository } = data;
            return (
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  {/* <Paper> */}
                  <RepositoryTitleCard repository={repository} />
                  {/* </Paper> */}
                </Grid>

                <Grid item xs={2}>
                  <RepositoryFlagsCard repository={repository} />
                </Grid>
                <Grid item xs={10}>
                  <RepositoryDetailsCard repository={repository} />
                </Grid>
              </Grid>
            );
          }}
        </Query>
      </div>
    );
  }
}

Repository.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Repository);
