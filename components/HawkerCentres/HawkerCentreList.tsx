//types
import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import HawkerCentreListProps from '@interfaces/HawkerCentres/HawkerCentreList';
//lib
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
//mui
import { Container, Grid, Typography } from '@mui/material';
//components
import HawkerCard from '@components/HawkerCentres/HawkerCard';
import HawkerCardSkeletons from '@components/HawkerCentres/HawkerCardSkeletons';
//context
import { HawkerCentresContext } from '@components/HawkerCentres/context/hawkerCentres';

/**
 * Renders the hawker cards into a flex list
 *
 * @param {HawkerCentreListProps} props - The filter if it exists
 * @returns {JSX.Element} - The hawker centre list component
 */
const HawkerCentreList = ({ filter }: HawkerCentreListProps): JSX.Element => {
	const { hawkerCentres, loading } = useContext(HawkerCentresContext);

	return (
		<Container sx={{ py: 8 }} maxWidth='xl'>
			{loading ? (
				<HawkerCardSkeletons />
			) : (
				<Grid container spacing={4}>
					{hawkerCentres.length ? (
						hawkerCentres
							.filter(
								(hawkerCentre) =>
									hawkerCentre.name.toLowerCase().includes(filter.toLowerCase()) ||
									hawkerCentre.address_myenv.toLowerCase().includes(filter.toLowerCase())
							)
							.map((hawkerCentre) => (
								<Grid item key={hawkerCentre._id} xs={12} sm={6} md={4}>
									<HawkerCard hawkerCentre={hawkerCentre} />
								</Grid>
							))
					) : (
						<Typography>Still loading</Typography>
					)}
				</Grid>
			)}
		</Container>
	);
};

export default HawkerCentreList;
