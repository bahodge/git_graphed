import React, { Component } from 'react';
import './App.css';
import Main from './routing/Main';
import Page from './components/shared/Page';
import NavBar from './components/shared/NavBar';

class App extends Component {
	render() {
		return (
			<Page>
				<NavBar />
				<Main />
			</Page>
		);
	}
}

export default App;
