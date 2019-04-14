import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import cookie from "react-cookies";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "white",
    fontSize: 15
  }
};

const loggedInButtons = ({ menuButton }) => {
  return (
    <div>
      <Link
        component={RouterLink}
        to="/users"
        children={<Button className={menuButton}>Users</Button>}
      />
      <Button href="http://localhost:4000/auth/signout" className={menuButton}>
        Logout
      </Button>
    </div>
  );
};

const loggedOutButtons = ({ menuButton }) => {
  return (
    <Button href="http://localhost:4000/auth/github" className={menuButton}>
      Signin
    </Button>
  );
};

const NavBar = (props) => {
  const { classes } = props;
  const userId = cookie.load("userId");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Git Graphed
          </Typography>
          {userId ? loggedInButtons(classes) : loggedOutButtons(classes)}
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBar));
