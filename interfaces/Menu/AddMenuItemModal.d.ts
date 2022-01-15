import { StoreMenus } from '@interfaces/supabase';

export default interface AddMenuItemModalProps {
	onAddItem: (menuItem: StoreMenus) => void;
	store_id: string;
}
