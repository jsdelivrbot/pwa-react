import React, { Component } from 'react';
import './Product.css';
import logo from './img/cart.png';

class CartProducts extends Component {

	render() {
		
		return (
			<div >
			{console.log(this.props.product)}
				<div className="row"> 
					{console.log(this.props.product)}
					<div className="col-md-3">
						<img id="img1" alt=" " src={this.props.product.src} height="250" width="210" /> <br/>
					</div>
					<div className="col-md-3">
						<span id="name" > {this.props.product.name} </span> <br/>
					</div>
					<div className="col-md-3">
						<span id="q"> Quantity: {this.props.product.quantity} </span> 
					</div>
					<div className="col-md-3">
						<span id="price">Price: {this.props.product.price}$ </span> <br/>
					</div>
	
				</div>
			</div>
			);
		
	}
}

export default CartProducts;

