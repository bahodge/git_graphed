import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Main from './routing/Main';
import Page from './components/shared/Page';
import NavBar from './components/shared/NavBar';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Page>
				<NavBar />
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Main />
					</Paper>
				</Grid>
			</Page>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
