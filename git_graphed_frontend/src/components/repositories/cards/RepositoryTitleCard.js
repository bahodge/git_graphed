import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 10
  },
  title: {
    fontSize: 12
  },
  subTitle: {
    fontSize: 10
  }
};

const RepositoryTitleCard = (props) => {
  const {
    classes,
    repository: { repoName, description, htmlUrl, fullName }
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h3" variant="h3">{`${
          repoName ? repoName : ""
        }`}</Typography>
        <Typography component="h6" variant="h6">{`${
          description ? description : "No Description Provided"
        }`}</Typography>
        <Typography component="p">{`${htmlUrl ? htmlUrl : ""}`}</Typography>
        <Typography component="p">{`${fullName ? fullName : ""}`}</Typography>
      </CardContent>
    </Card>
  );
};

RepositoryTitleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RepositoryTitleCard);
