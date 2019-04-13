import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { loggedInNav } from '../../staticData/navItems';
import Person from '@material-ui/icons/Person';
import Assignment from '@material-ui/icons/Assignment';
import Logout from '@material-ui/icons/PersonOutline';
import Home from '@material-ui/icons/DesktopMac';
import Divider from '@material-ui/core/Divider';

const LoggedIn = () => (
    <List>
      <Link to={"/landing"}>
        <ListItem button>
          <ListItemIcon><Home/></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </Link>
      <Divider className="divider-home"/>
      {loggedInNav.map((text, index) => (
        <Link to={text[1]} key={index}>
          <ListItem button>
            <ListItemIcon>{index % 2 === 0 ? <Assignment /> : <Person />}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        </Link>
      ))}
      <a href="http://localhost:4000/auth/signout">
        <ListItem button>
          <ListItemIcon><Logout/></ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </a>
    </List>
);

export default LoggedIn;