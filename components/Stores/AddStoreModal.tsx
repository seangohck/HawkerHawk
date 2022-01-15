//types
import AddStoreModalProps from '@interfaces/Stores/AddStoreModal';
//mui
import { Modal, Box } from '@mui/material';
//components
import AddStoreForm from '@components/Stores/AddStoreForm';

/**
 * Styles for the modal
 */
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	height: '60%',
	bgcolor: 'background.paper',
	border: '2px solid blue',
	boxShadow: 24,
	p: 4,
};

/**
 * Renders the modal containing the AddStoreForm
 *
 * @param {AddStoreModalProps} props - The props
 * @returns {JSX.Element} - The AddStoreModal component
 */
const AddStoreModal = ({ open, closeModal, onAddStore, id }: AddStoreModalProps): JSX.Element => {
	return (
		<Modal open={open} onClose={closeModal}>
			<Box sx={style}>
				<AddStoreForm onAddStore={onAddStore} id={id} />
			</Box>
		</Modal>
	);
};

export default AddStoreModal;
