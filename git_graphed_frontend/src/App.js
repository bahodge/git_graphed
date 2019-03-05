import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
// import ApolloClient from 'apollo-boost';
import HelloReact from './components/shared/HelloReact';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import absintheSocketLink from './absinthe-socket-link';

// const link = split(
// 	(operation) => hasSubscription(operation.query),
// 	absintheSocketLink,
// 	createHttpLink({ uri: 'api/graphql' })
// );

// const client = new ApolloClient({
// 	link,
// 	cache: new InMemoryCache()
// });

const client = new ApolloClient({
	// link: 'http://localhost.4000/api/graphql',
	link: absintheSocketLink,
	cache: new InMemoryCache()
});

console.log(client);

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
