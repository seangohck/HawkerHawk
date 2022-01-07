import { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import AddMenuItemForm from './AddMenuItemForm';
import { StoreMenus } from '@interfaces/supabase';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	border: '2px solid blue',
	boxShadow: 24,
	p: 4,
};

const AddMenuItemModal = ({ onAddItem, store_id }: { onAddItem: (menuItem: StoreMenus) => void; store_id: string }) => {
	const [open, setOpen] = useState<boolean>(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<>
			<Button size='small' onClick={openModal} variant='contained'>
				Add Menu Item
			</Button>
			<Modal open={open} onClose={closeModal}>
				<Box sx={style}>
					<Box></Box>
					<AddMenuItemForm store_id={store_id} onAddItem={onAddItem} />
					<Button fullWidth onClick={closeModal} variant='contained' color='error'>
						Close
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default AddMenuItemModal;
