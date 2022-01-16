import { HawkerAPIRecord } from '@interfaces/hawkerCentre';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

interface ContextType {
	hawkerCentres: HawkerAPIRecord[];
	loading: boolean;
}

export const HawkerCentresContext = createContext<ContextType>({
	hawkerCentres: [],
	loading: true,
});

export const HawkerCentresProvider = ({ children }: { children: React.ReactNode }) => {
	const [hawkerCentres, setHawkerCentres] = useState<HawkerAPIRecord[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		/**
		 * Fetches the hawker centres from the public gov api
		 */
		const fetchData = async () => {
			const axiosRes = await axios.get('api/hawker_centres');
			const hawkerCentres: HawkerAPIRecord[] = axiosRes.data;
			setHawkerCentres(hawkerCentres);
			setLoading(false);
		};

		fetchData();
	}, []);

	return <HawkerCentresContext.Provider value={{ hawkerCentres, loading }}>{children}</HawkerCentresContext.Provider>;
};
