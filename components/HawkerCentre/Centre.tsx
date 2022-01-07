import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import DetailedHawkerCard from '@components/HawkerCentre/DetailedHawkerCard';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@utils/config';
import axios from 'axios';
import Header from '@components/shared/Header';
import Loader from '@components/shared/Loader';
import { Store } from '@interfaces/supabase';
import { Container } from '@mui/material';
import StoreList from '@components/Stores/StoreList';

const Centre = ({ id }: { id: number }) => {
	const [hawkerCentre, setHawkerCentre] = useState<HawkerAPIRecord>();
	const [hawkerStores, setHawkerStores] = useState<Store[]>([]);
	const [storeFilter, setStoreFilter] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchCentre = async () => {
			const axiosRes = await axios.get(`${API_BASE_URL}/hawker_centre/${id}`);
			const hawkerCentre: HawkerAPIRecord = axiosRes.data;
			setHawkerCentre(hawkerCentre as HawkerAPIRecord);
		};

		const fetchStores = async () => {
			const axiosRes = await axios.get(`${API_BASE_URL}/stores/${id}`);
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
					<DetailedHawkerCard hawkerCentre={hawkerCentre} />
					<StoreList stores={hawkerStores} filter={storeFilter} />
				</Container>
			)}
		</>
	);
};

export default Centre;
