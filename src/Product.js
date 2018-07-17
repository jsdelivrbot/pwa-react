import React, { Component } from 'react';
import './Product.css';
import logo from './img/cart.png';

class Product extends Component {

	render() {
		return (
			<div className="col-md-3">
				<img id="img1" src={this.props.product.src} height="250" width="210" /> <br/>
				<span id="name" > {this.props.product.name } </span> <br/>
				<span id="price"> {this.props.product.price}$ </span> <br/>
 			    <button type="button" id="butt" className="btn btn-primary">
 			    	<img src={logo} width="30" height="30" /> Add to cart</button>
			</div>
			);
		
	}
}

export default Product;

	