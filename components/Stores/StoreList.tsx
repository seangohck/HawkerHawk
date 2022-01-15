//types
import StoreListProps from '@interfaces/Stores/StoreList';
import { Store } from '@interfaces/supabase';
//lib
import React from 'react';
//mui
import { Container, Grid, Typography } from '@mui/material';
//components
import StoreCard from '@components/Stores/StoreCard';

/**
 * Renders a flex list of the stores in a centre
 *
 * @param {StoreListProps} props - The store and the filter
 * @returns {JSX.Element} - The store list component
 */
const StoreList = ({ stores, filter }: StoreListProps): JSX.Element => {
	return (
		<Container sx={{ marginTop: '3rem' }}>
			<Grid container spacing={2}>
				{stores.length ? (
					stores
						.filter((store: Store) => store.store_name.toLowerCase().includes(filter.toLowerCase()))
						.map((store: Store) => (
							<Grid item xs={12} md={6} lg={4} key={store.store_id}>
								<StoreCard store={store} />
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
