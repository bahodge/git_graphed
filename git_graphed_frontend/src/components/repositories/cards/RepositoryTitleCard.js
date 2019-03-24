import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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

const RepositoryTitleCard = (props) => {
  const {
    classes,
    repository: {
      id,
      repoName,
      description,
      htmlUrl,
      fullName,
      language,
      defaultBranch,
      forks,
      forksCount,
      openIssues,
      openIssuesCount,
      size,
      stargazersCount,
      watchers,
      WatchersCount
    }
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h3" variant="h3">{`${repoName}`}</Typography>
        <Typography component="h6" variant="h6">{`${description}`}</Typography>
        <Typography component="p">{`${htmlUrl}`}</Typography>
        <Typography component="p">{`${fullName}`}</Typography>
      </CardContent>
    </Card>
  );
};

RepositoryTitleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RepositoryTitleCard);
