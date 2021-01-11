import React, { useEffect, useState } from 'react';

const Prices = () => {
	const [getPrices, setPrices] = useState({ prices: [] });

	return (
		<div className="flex items-center justify-around pt-20">
			<div className="text-3xl font-bold">Prices</div>
		</div>
	);
};
export default Prices;
