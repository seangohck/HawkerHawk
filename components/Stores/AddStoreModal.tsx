import { Store } from '@interfaces/supabase';
import { Modal, Box } from '@mui/material';
import AddStoreForm from './AddStoreForm';

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

const AddStoreModal = ({
	open,
	closeModal,
	onAddStore,
	id,
}: {
	open: boolean;
	closeModal: () => void;
	onAddStore: (store: Store) => void;
	id: number;
}) => {
	return (
		<Modal open={open} onClose={closeModal}>
			<Box sx={style}>
				<AddStoreForm onAddStore={onAddStore} id={id} />
			</Box>
		</Modal>
	);
};

export default AddStoreModal;
