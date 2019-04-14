import React from 'react';
import cookie from 'react-cookies';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
const userId = cookie.load('userId');


const MainNav = props => {
  return userId ? <LoggedIn/> : <LoggedOut/> 
}

export default MainNav;