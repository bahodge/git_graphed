import React, { Component } from 'react';
import { withRouter } from 'react-router';
import cookie from 'react-cookies';

class Header extends Component {
	userId = cookie.load('userId');
	render() {
		if (this.userId) {
			return (
				<div>
					<a href={'http://localhost:4000/auth/signout'}>
						<button>Log Out</button>
					</a>
				</div>
			);
		} else {
			return (
				<div>
					<a href={'http://localhost:4000/auth/github'}>
						<button>Sign in with github</button>
					</a>
				</div>
			);
		}
	}
}

export default withRouter(Header);
