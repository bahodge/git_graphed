import React, { Component } from 'react';
import './App.css';
import Main from './routing/Main';
import Header from './components/shared/Header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Main />
				</div>
			</div>
		);
	}
}

export default App;
