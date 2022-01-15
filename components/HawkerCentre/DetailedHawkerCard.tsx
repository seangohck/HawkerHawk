//types
import DetailedHawkerCardProps from '@interfaces/HawkerCentre/DetailedHawkerCard';
//helpers
import { isCentreOpen, getQuarter } from '@utils/dates';
//lib
import React from 'react';
//mui
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@mui/material';

/**
 * Renders the detailed hawker card component
 *
 * @param {DetailedHawkerCardProps} props - The hawkerCentre and addStore callback
 * @returns {JSX.Element} - The detailed hawker card
 */
const DetailedHawkerCard = ({ hawkerCentre, addStore }: DetailedHawkerCardProps): JSX.Element => {
	if (!hawkerCentre) {
		return <div></div>;
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
					<Button size='small' variant='outlined'>
						<Link
							underline='none'
							target='_blank'
							href={`http://www.google.com/maps/place/${hawkerCentre.latitude_hc},${hawkerCentre.longitude_hc}`}
						>
							View on maps
						</Link>
					</Button>

					<Button onClick={addStore} size='small' variant='contained' color='secondary'>
						Add store
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default DetailedHawkerCard;
