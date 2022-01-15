//types
import StoreCardProps from '@interfaces/Stores/StoreCard';
//lib
import { useState } from 'react';
//mui
import { Card, CardContent, Typography, Button, Modal, Box, Table, TableContainer, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
//components
import MenuModal from '@components/Menu/MenuModal';

/**
 * Renders a card for a store
 *
 * @param {StoreCardProps} props - The store
 * @returns {JSX.Element} - The Store Card component
 */
const StoreCard = ({ store }: StoreCardProps): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);

	/**Opens the modal */
	const openModal = () => setOpen(true);

	/**Closes the modal */
	const closeModal = () => setOpen(false);

	const { weekdays, weekends_ph, closed } = store.store_hours[0];
	return (
		<Card sx={{ maxWidth: 240 }}>
			<CardContent>
				<Typography variant='h6'>{store.store_name}</Typography>
				<Typography>Unit: {store.store_unit}</Typography>
				<Typography>Opening hours:</Typography>
				<Typography>Weekdays: {weekdays}</Typography>
				<Typography>Weekends/PH: {weekends_ph}</Typography>
				<Typography>Closed on: {closed}</Typography>
				<Button onClick={openModal} variant='contained' size='small'>
					<MenuBookIcon />
					View menu
				</Button>
				<MenuModal store={store} open={open} closeModal={closeModal} />
			</CardContent>
		</Card>
	);
};

export default StoreCard;
