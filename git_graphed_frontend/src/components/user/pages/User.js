import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Query } from "react-apollo";
import UserDetailsCard from "../cards/UserDetailsCard";
import Grid from "@material-ui/core/Grid";
import '../../../css/Users.css';
import RepositorySimpleCard from "../../repositories/cards/RepositorySimpleCard";
import USER_WITH_DETAILS_QUERY from "../../graphql/queries/users/UserWithDetailsQuery";
import USER_REPOSITORIES_QUERY from "../../graphql/queries/repositories/UserRepositoriesQuery";
import { Divider } from "@material-ui/core";


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

// for route `/users/:id`
class User extends Component {
  render() {
    const { userId: id } = this.props.match.params;
    const { classes } = this.props;
    return (
      <div className="user-container">
        <div className="user-header">
        <Typography component="h2" variant="h4">
            Repositories
        </Typography>
        <Divider className="user-repositories-divider"/>
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
        <div className="user-repositories">
        <Divider className="user-repositories-divider"/>
        <div className="user-repositories-cont">
        <Query query={USER_REPOSITORIES_QUERY} variables={{ id: id }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Something Went Wrong!</div>;
              return data.userRepositories.map((repository) => (
                  <RepositorySimpleCard
                    key={repository.id}
                    repository={repository}
                    userId={id}
                  />
              ));
            }}
          </Query>
        </div>
          
        </div>
      </div>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
