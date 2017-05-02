import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const details = this.props.details;
		const index = this.props.index;
		// or can use E6 structuring:
		// const { details, index } = this.props;

		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!'

		return (
			<li className="menu-fish">
				{details.name}
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
			</li>

		)
	}
}

export default Fish;