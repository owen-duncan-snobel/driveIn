import React from 'react';
import moment from 'moment';
import Cards from '../cards/cards';

const Screens = (props) => {
	// * screens index 1 refers to the movies on the selected screen
	let screens = props.screens[1];
	return (
		<div className="flex flex-wrap overflow-hidden">
			<div className="block sm:flex sm:flex-wrap  overflow-hidden mx-auto gap-2">
				{/* For Every Movie at the screen create its card with the information from db */}
				{screens.map((screen) => {
					let screenTime = screen.screenTime;
					try {
						// * Convert the time to the standard 12 hour clock format
						screenTime = moment(screenTime, 'hh:mm:ss.SSS').format(
							'h:mm a'
						);
					} catch (e) {
						console.log(e);
					}

					return (
						<Cards
							screen={screen}
							screenTime={screenTime}
							key={screen.id}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Screens;
