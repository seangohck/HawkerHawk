import { Store, StoreMenus } from '@interfaces/supabase';
import { Modal, Box, Typography } from '@mui/material';
import AddMenuItemModal from './AddMenuItemModal';
import MenuTable from './MenuTable';
import { useState, useEffect } from 'react';

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

const MenuModal = ({ open, closeModal, store }: { open: boolean; closeModal: () => void; store: Store }) => {
	const [menu, setMenu] = useState<StoreMenus[]>(store.store_menus);

	const onAddItem = (menuItem: StoreMenus) => {
		console.log(menuItem);
		setMenu([...menu, menuItem]);
	};

	return (
		<Modal open={open} onClose={closeModal}>
			<Box sx={style}>
				<Typography variant='h5' id='modal-modal-title'>
					{store.store_name}
				</Typography>
				<Typography>{store.store_info}</Typography>
				<Typography variant='h5' id='modal-modal-title'>
					Menu
				</Typography>
				<AddMenuItemModal store_id={store.store_id} onAddItem={onAddItem} />
				<MenuTable menu={menu} />
			</Box>
		</Modal>
	);
};

export default MenuModal;
