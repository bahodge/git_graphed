import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const styles = {
  card: {
    margin: 10
  },
  table: {
    minWidth: 100
  }
};

const RepositoryDetailsCard = (props) => {
  const {
    classes,
    repository: {
      language,
      defaultBranch,
      forks,
      forksCount,
      openIssues,
      openIssuesCount,
      size,
      stargazersCount,
      watchers,
      watchersCount
    }
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Primary Language</TableCell>
              <TableCell>Default Branch</TableCell>
              <TableCell>Forks</TableCell>
              <TableCell>Forks Count</TableCell>
              <TableCell>Open Issues</TableCell>
              <TableCell>Open Issues Count</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Stargazers Count</TableCell>
              <TableCell>Watchers</TableCell>
              <TableCell>Watchers Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{`${language}`}</TableCell>
              <TableCell>{`${defaultBranch}`}</TableCell>
              <TableCell>{`${forks}`}</TableCell>
              <TableCell>{`${forksCount}`}</TableCell>
              <TableCell>{`${openIssues}`}</TableCell>
              <TableCell>{`${openIssuesCount}`}</TableCell>
              <TableCell>{`${size}`}</TableCell>
              <TableCell>{`${stargazersCount}`}</TableCell>
              <TableCell>{`${watchers}`}</TableCell>
              <TableCell>{`${watchersCount}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

RepositoryDetailsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RepositoryDetailsCard);
