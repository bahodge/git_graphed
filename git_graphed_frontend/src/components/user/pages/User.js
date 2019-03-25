import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import UserDetailsCard from "../cards/UserDetailsCard";
import Grid from "@material-ui/core/Grid";

import USER_WITH_DETAILS_QUERY from "../../graphql/queries/users/UserWithDetailsQuery";

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

class User extends Component {
  render() {
    const { userId: id } = this.props.match.params;
    const { classes } = this.props;
    return (
      <div>
        <Query query={USER_WITH_DETAILS_QUERY} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...maybe, idk</p>;
            if (error) return <p>Error</p>;

            return (
              <div className={classes.root}>
                <Grid container>
                  <UserDetailsCard user={data.user} />
                </Grid>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
