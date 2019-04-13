import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainRouter from './routing/MainRouter';
import Page from './components/shared/Page';
import Header from './components/header/Header';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'left',
		color: theme.palette.text.secondary
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Page>
				<Header/>
				<MainRouter />
			</Page>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
