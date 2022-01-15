import { Store } from '@interfaces/supabase';
export default interface MenuModalProps {
	open: boolean;
	closeModal: () => void;
	store: Store;
}
