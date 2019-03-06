import React, { Component } from 'react';
import './App.css';
import Main from './routing/Main';

class App extends Component {
	render() {
		return (
			<div className="center w85">
				<div className="ph3 pv1 background-gray">
					<Main />
				</div>
			</div>
		);
	}
}

export default App;
