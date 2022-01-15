import { Store } from '@interfaces/supabase';

export default interface AddStoreModalProps {
	open: boolean;
	closeModal: () => void;
	onAddStore: (store: Store) => void;
	id: number;
}
