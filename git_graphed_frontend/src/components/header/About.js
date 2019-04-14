import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { infoNav } from '../../staticData/navItems';
import Public from '@material-ui/icons/Public';
import Description from '@material-ui/icons/Description';

const About = () => (
    <List>
      {infoNav.map((text, index) => (
        <Link to={text[1]} key={index}>
          <ListItem button>
            <ListItemIcon>{index % 2 === 0 ? <Public /> : <Description />}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        </Link>
      ))}
    </List>
);

export default About;