import React, { Component } from 'react';

/**
 * Example Prices Data
 * infant (under 2) = free
 * child = $5.00
 * adult = $14.00
 * senior = $11.25
 */
class Prices extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="w-48 mx-auto mt-20">
				<div className=" text-center text-3xl font-bold">Prices</div>
				<div class="grid grid-cols-2 gap-x-8 pl-6 font-hairline">
					<div>Infant</div>
					<div>Free</div>
					<div>Child</div>
					<div>$5.00</div>
					<div>Adult</div>
					<div>$14.00</div>
					<div>Senior</div>
					<div className="">$11.25</div>
				</div>
			</div>
		);
	}
}
export default Prices;
