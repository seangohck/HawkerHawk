import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import DetailedHawkerCard from '@components/HawkerCentre/DetailedHawkerCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@components/shared/Header';
import Loader from '@components/shared/Loader';
import { Store } from '@interfaces/supabase';
import { Container, Modal } from '@mui/material';
import StoreList from '@components/Stores/StoreList';
import AddStoreModal from '@components/Stores/AddStoreModal';

const Centre = ({ id }: { id: number }) => {
	const [hawkerCentre, setHawkerCentre] = useState<HawkerAPIRecord>();
	const [hawkerStores, setHawkerStores] = useState<Store[]>([]);
	const [storeFilter, setStoreFilter] = useState<string>('');
	const [addStore, setAddStore] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const openAddStoreForm = () => setAddStore(true);
	const closeAddStoreForm = () => setAddStore(false);
	const onAddStore = (store: Store) => {
		console.log(store);
		setHawkerStores([...hawkerStores, store]);
		setAddStore(false);
	};

	useEffect(() => {
		const fetchCentre = async () => {
			const axiosRes = await axios.get(`/api/hawker_centre/${id}`);
			const hawkerCentre: HawkerAPIRecord = axiosRes.data;
			setHawkerCentre(hawkerCentre as HawkerAPIRecord);
		};

		const fetchStores = async () => {
			const axiosRes = await axios.get(`/api/stores/${id}`);
			const hawkerStores = axiosRes.data;
			setHawkerStores(hawkerStores as Store[]);
		};

		const fetchData = async () => {
			await fetchCentre();
			await fetchStores();
			setLoading(false);
		};

		fetchData();
	}, [id]);

	return (
		<>
			<Header setFilter={setStoreFilter} searchTerm='a store' />
			{loading ? (
				<div style={{ marginTop: '10rem' }}>
					<Loader />
				</div>
			) : (
				<Container fixed maxWidth='lg' disableGutters>
					<DetailedHawkerCard hawkerCentre={hawkerCentre} addStore={openAddStoreForm} />
					<StoreList stores={hawkerStores} filter={storeFilter} />
					<AddStoreModal open={addStore} closeModal={closeAddStoreForm} onAddStore={onAddStore} id={id} />
				</Container>
			)}
		</>
	);
};

export default Centre;
