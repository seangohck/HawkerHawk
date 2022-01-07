import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import { isCentreOpen, getQuarter } from '@utils/dates';

const DetailedHawkerCard = ({ hawkerCentre }: { hawkerCentre?: HawkerAPIRecord }) => {
	if (!hawkerCentre) {
		return null;
	}

	const { open, remarks } = isCentreOpen(hawkerCentre, getQuarter());

	return (
		<>
			<Card raised sx={{ marginTop: '5rem' }}>
				<CardMedia component='img' alt='green iguana' height='200' image={hawkerCentre.photourl} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{hawkerCentre.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{hawkerCentre.description_myenv}
					</Typography>
					<Typography>Food stalls: {hawkerCentre.no_of_food_stalls}</Typography>
					<Typography>Market stalls: {hawkerCentre.no_of_market_stalls}</Typography>
					<Typography>Street address: {hawkerCentre.address_myenv}</Typography>
					<Typography variant='h6' sx={{ color: open ? 'green' : 'red', fontWeight: '600' }}>
						{open ? 'Open' : 'Closed'}
					</Typography>
					{remarks && <Typography>{remarks}</Typography>}
				</CardContent>
				<CardActions>
					<Button size='small'>View on Maps</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default DetailedHawkerCard;
