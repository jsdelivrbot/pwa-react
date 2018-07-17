import React, { Component } from 'react';
import './App.css';

class Product extends Component {

	render() {

		return (
			<div >   
			<li>
				{this.props.product.name} {this.props.product.price}$ 
			</li>
			</div>
			);
	}
}

export default Product;
