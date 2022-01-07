import React, { useState } from 'react';
import HawkerCentreList from '@components/HawkerCentres/HawkerCentreList';
import Header from '@components/HawkerCentres/Header';

const HawkerCentres = () => {
	const [filter, setFilter] = useState('');
	return (
		<>
			<Header setFilter={setFilter} />
			<main>
				<HawkerCentreList filter={filter} />
			</main>
		</>
	);
};

export default HawkerCentres;
