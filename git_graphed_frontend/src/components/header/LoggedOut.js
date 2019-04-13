import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { loggedOutNav } from '../../staticData/navItems';
import Person from '@material-ui/icons/Person';
import Register from '@material-ui/icons/HowToReg';
import Home from '@material-ui/icons/DesktopMac';
import Divider from '@material-ui/core/Divider';

const loginUrl = "http://localhost:4000/auth/github";

const login = () => {
  console.log("user");
}

const LoggedOut = () => (
  <List>
    <Link to={"/landing"}>
      <ListItem button>
        <ListItemIcon><Home/></ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
    </Link>
    <Divider/>
    {loggedOutNav.map((text, index) => (
      <a href={loginUrl} key={index}>
        <ListItem button onClick={() => index % 2 ? login() : console.log("registr")}>
          <ListItemIcon>{index % 2 === 0 ? <Person /> : <Register />}</ListItemIcon>
          <ListItemText primary={text[0]} />
        </ListItem>
      </a>
    ))}
  </List>
);

export default LoggedOut;