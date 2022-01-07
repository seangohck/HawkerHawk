import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Store } from '@interfaces/supabase';

const StoreList = ({ stores }: { stores: Store[] }) => {
	return (
		<Container sx={{ marginTop: '3rem' }}>
			<Grid container spacing={2}>
				{stores.length ? (
					stores.map((store) => (
						<Grid item xs={12} md={6} lg={4} key={store.store_id}>
							{store.store_name}
						</Grid>
					))
				) : (
					<Typography>Looks like there are no stores added yet</Typography>
				)}
			</Grid>
		</Container>
	);
};

export default StoreList;
