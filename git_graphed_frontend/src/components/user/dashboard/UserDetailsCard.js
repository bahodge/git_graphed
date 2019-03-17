import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		minWidth: 275,
		maxWidth: 600
	},
	title: {
		fontSize: 18
	},
	subTitle: {
		fontSize: 15
	}
};

const UserDetailsCard = (props) => {
	const { classes } = props;
	const { id, firstName, lastName, email } = props.user;
	return (
		<Grid container justify="flex-start">
			<Card className={classes.card} key={id}>
				<CardContent>
					<Typography color="textSecondary" component="h3" variant="h3" gutterBottom>
						{`${firstName} ${lastName}`}
					</Typography>
					<Typography color="textSecondary" component="h5" variant="h5">
						{`Email: ${email}`}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

UserDetailsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDetailsCard);
