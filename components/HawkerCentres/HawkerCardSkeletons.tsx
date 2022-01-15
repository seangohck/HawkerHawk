//mui
import { Skeleton, Grid } from '@mui/material';

/**
 * Renders the loading skeletons for the hawker cards
 *
 * @returns {JSX.Element}
 */
const HawkerCardSkeletons = (): JSX.Element => {
	return (
		<Grid container spacing={4}>
			{Array(9)
				.fill(0)
				.map((item) => (
					<Grid item key={Math.random()} xs={12} sm={6} md={4}>
						<Skeleton height={140} variant='rectangular'></Skeleton>
						<Skeleton height={60} variant='text'></Skeleton>
						<Skeleton height={30} variant='text'></Skeleton>
						<Skeleton height={30} variant='text'></Skeleton>
						<Skeleton height={30} variant='text'></Skeleton>
					</Grid>
				))}
		</Grid>
	);
};

export default HawkerCardSkeletons;
