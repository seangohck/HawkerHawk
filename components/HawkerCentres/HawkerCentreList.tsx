import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import { Container, Grid, Typography } from '@mui/material';
import HawkerCard from '@components/HawkerCentres/HawkerCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '@components/shared/Loader';

const HawkerCentreList = ({ filter }: { filter: string }) => {
	const [hawkerCentres, setHawkerCentres] = useState<HawkerAPIRecord[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const axiosRes = await axios.get('api/hawker_centres');
			const hawkerCentres: HawkerAPIRecord[] = axiosRes.data;
			setHawkerCentres(hawkerCentres);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<Container sx={{ py: 8 }} maxWidth='xl'>
			{loading ? (
				<Loader />
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
