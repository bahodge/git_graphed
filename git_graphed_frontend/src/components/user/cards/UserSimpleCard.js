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
		maxWidth: 600,
		margin: 10
	},
	title: {
		fontSize: 12
	},
	subTitle: {
		fontSize: 10
	}
};

const UserSimpleCard = (props) => {
	const { classes } = props;
	const { firstName, lastName, id } = props.user;

	return (
		<Grid container justify="flex-start">
			<Card className={classes.card} key={id}>
				<CardContent>
					<Typography color="textSecondary" component="p" variant="p" gutterBottom>
						{`${firstName} ${lastName}`}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

UserSimpleCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserSimpleCard);
