import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import HelloReact from './components/shared/HelloReact';

const client = new ApolloClient({
	uri: 'http://localhost:4000/api/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<HelloReact />
					</header>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
