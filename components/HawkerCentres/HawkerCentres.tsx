//lib
import React, { useState } from 'react';
//components
import HawkerCentreList from '@components/HawkerCentres/HawkerCentreList';
import Header from '@components/shared/Header';
//context
import { HawkerCentresProvider } from '@components/HawkerCentres/context/hawkerCentres';

/**
 *The container component for the Hawker Centres on the main page
 *
 * @returns {JSX.Element}
 */
const HawkerCentres = (): JSX.Element => {
	const [filter, setFilter] = useState('');
	return (
		<>
			<Header setFilter={setFilter} searchTerm='a hawker centre' />
			<HawkerCentresProvider>
				<main>
					<HawkerCentreList filter={filter} />
				</main>
			</HawkerCentresProvider>
		</>
	);
};

export default HawkerCentres;
