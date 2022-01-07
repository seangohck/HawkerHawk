import { Store } from '@interfaces/supabase';
import { Modal, Box, Typography, Menu } from '@mui/material';
import MenuTable from './MenuTable';

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

const MenuModal = ({ open, closeModal, store }: { open: boolean; closeModal: () => void; store: Store }) => (
	<Modal open={open} onClose={closeModal}>
		<Box sx={style}>
			<Typography variant='h5' id='modal-modal-title'>
				Menu for {store.store_name}
			</Typography>
			<MenuTable menu={store.store_menus} />
		</Box>
	</Modal>
);

export default MenuModal;
