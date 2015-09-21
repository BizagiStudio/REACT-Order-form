import React from 'react';

export default class ServiceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active : false
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	componentDidMount() {
		this.setState({active: false});
	}

	clickHandler() {
		let active = !this.state.active;
		this.setState({ active: active });   
		this.props.addTotal( active ? this.props.price : -this.props.price );
	} 

	render() {
		return <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
			{this.props.name} <strong>${this.props.price.toFixed(2)}</strong>
		</p>;
	}
}