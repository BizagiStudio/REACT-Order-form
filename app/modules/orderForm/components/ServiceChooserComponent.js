import React from 'react';
import Uid from 'uid';
import ServiceList from './ServiceListComponent';

export default class ServiceChooser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			total : 0
		};
		this.addTotal = this.addTotal.bind(this);
	}

	addTotal(price) {
		this.setState({ total: this.state.total + price});
	}

	render() {
		return <div>
			<h1>Our Services</h1>
			<div className="services">
				{
					this.props.items.map((service) => {
						return <ServiceList name={service.name} price={service.price} active={service.active} addTotal={this.addTotal} key={Uid(4)}/>
					})
				}
			</div>
			<p className="total">TOTAL: <strong>{this.state.total.toFixed(2)}</strong></p>
		</div>;
	}

}