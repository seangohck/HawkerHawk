//types
import AddMenuItemModalProps from '@interfaces/Menu/AddMenuItemModal';
//lib
import { useState } from 'react';
//mui
import { Modal, Box, Button } from '@mui/material';
//components
import AddMenuItemForm from '@components/Menu/AddMenuItemForm';

/**
 * Styles for the modal
 */
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

/**
 * Renders the modal for the add menu item form
 *
 * @param {AddMenuItemModalProps} props - The onAddItem callback and store id
 * @returns {JSX.Element} - The modal that contains the add menu item form
 */
const AddMenuItemModal = ({ onAddItem, store_id }: AddMenuItemModalProps): JSX.Element => {
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
