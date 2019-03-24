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
    minWidth: 300,
    maxWidth: 300,
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
      id,
      repoPrivate,
      archived,
      fork,
      hasDownloads,
      hasIssues,
      hasPages,
      hasProjects,
      hasWiki
    }
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Private</TableCell>
              <TableCell align="left">{`${repoPrivate}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Archived</TableCell>
              <TableCell align="left">{`${archived}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Forked</TableCell>
              <TableCell align="left">{`${fork}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloaded</TableCell>
              <TableCell align="left">{`${hasDownloads}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Open Issues</TableCell>
              <TableCell align="left">{`${hasIssues}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pages</TableCell>
              <TableCell align="left">{`${hasPages}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Projects</TableCell>
              <TableCell align="left">{`${hasProjects}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wiki</TableCell>
              <TableCell align="left">{`${hasWiki}`}</TableCell>
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
