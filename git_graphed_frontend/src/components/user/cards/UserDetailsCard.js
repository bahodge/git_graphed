import React from "react";
import { Mutation, graphql, Query } from "react-apollo";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Refresh from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import SYNC_USER_REPOSITORIES from "../../graphql/mutations/github/SyncUserRepositoriesMutation";



const styles = {
  card: {
    minWidth: 275,
    maxWidth: 600
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 14
  },
  btn: {
    marginTop: 5
  }
};

const UserDetailsCard = (props) => {
  const {
    classes,
    user: { id, firstName, lastName, email, username }
  } = props;
  return (
    <div className="highlighted-user-cont">
    <div>
      <Typography component="h3" variant="h5">
        Username:
      </Typography>
      <Typography color="textPrimary" component="h3" variant="subtitle1" 
        gutterBottom>
          {`@${username}`}
      </Typography>
    </div>
      <div>
        <Typography variant="h5">
          Name:
        </Typography>
      <Typography
        className={classes.subTitle}
        color="textSecondary"
        component="p"
      >
        {`${firstName} ${lastName}`}
      </Typography>
      </div>
      {email !== null ? (<div>
        <Typography variant="h5">
          Email:
        </Typography>
      <Typography
        color="textSecondary"
        component="p"
      >
        {email}
      </Typography>
      </div>) : ("")}
      <Mutation mutation={SYNC_USER_REPOSITORIES} variables={{ id: id }}>
        {(syncUserRepositories, { loading, error }) => {
          if (loading) return <Button disabled>Syncing</Button>;
          if (error) return <p>Something Went Wrong!</p>;

          return <Button onClick={syncUserRepositories}>Sync Repos <Refresh/></Button>;
        }}
      </Mutation>
    </div>    
  );
};

UserDetailsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default graphql(SYNC_USER_REPOSITORIES, {
  name: "syncUserRepositories"
})(withStyles(styles)(UserDetailsCard));
