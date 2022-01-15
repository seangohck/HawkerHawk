import { Store } from '@interfaces/supabase';

export default interface AddStoreFormProps {
	onAddStore: (store: Store) => void;
	id: number;
}
