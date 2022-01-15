//types
import { StoreMenus } from '@interfaces/supabase';
import MenuModalProps from '@interfaces/Menu/MenuModal';
//lib
import { useState } from 'react';
//mui
import { Modal, Box, Typography } from '@mui/material';
//components
import AddMenuItemModal from '@components/Menu/AddMenuItemModal';
import MenuTable from '@components/Menu/MenuTable';

/**
 * Style for the modal
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
 * Renders the modal containing the menu table
 *
 * @param {MenuModalProps} props - The open state, closeModal callback and the store
 * @returns {JSX.Element} - The modal containing the menu table
 */
const MenuModal = ({ open, closeModal, store }: MenuModalProps): JSX.Element => {
	const [menu, setMenu] = useState<StoreMenus[]>(store.store_menus);

	/**
	 * Adds a menu item to the state
	 *
	 * @param {StoreMenus} menuItem - The menu item added
	 */
	const onAddItem = (menuItem: StoreMenus) => {
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
