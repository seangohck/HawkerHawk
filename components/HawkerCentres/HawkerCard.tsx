import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Link from 'next/link';
import { isCentreOpen, getQuarter } from '@utils/dates';

const HawkerCard = ({ hawkerCentre }: { hawkerCentre: HawkerAPIRecord }) => {
	const { open, remarks } = isCentreOpen(hawkerCentre, getQuarter());

	return (
		<Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
			<CardMedia component='img' image={hawkerCentre.photourl} alt={hawkerCentre.name} />
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant='h5' component='h2'>
					{hawkerCentre.name}
				</Typography>
				<Typography>Food stalls: {hawkerCentre.no_of_food_stalls}</Typography>
				<Typography>Market stalls: {hawkerCentre.no_of_market_stalls}</Typography>
				<Typography>Street address: {hawkerCentre.address_myenv}</Typography>
			</CardContent>
			<CardContent>
				<Typography variant='h6' sx={{ color: open ? 'green' : 'red', fontWeight: '600' }}>
					{open ? 'Open' : 'Closed'}
				</Typography>
				{remarks && <Typography>{remarks}</Typography>}
			</CardContent>
			<CardActions>
				<Button size='small'>
					<Link href={`/hawker_centre/${hawkerCentre._id}`}>
						<a
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							Details
						</a>
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default HawkerCard;
