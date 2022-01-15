import { StoreMenus } from '@interfaces/supabase';

export default interface AddMenuItemFormProps {
	onAddItem: (store: StoreMenus) => void;
	store_id: string;
}
