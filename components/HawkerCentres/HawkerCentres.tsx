import React, { useState } from 'react';
import HawkerCentreList from '@components/HawkerCentres/HawkerCentreList';
import Header from '@components/shared/Header';

const HawkerCentres = () => {
	const [filter, setFilter] = useState('');
	return (
		<>
			<Header setFilter={setFilter} searchTerm='a hawker centre' />
			<main>
				<HawkerCentreList filter={filter} />
			</main>
		</>
	);
};

export default HawkerCentres;
