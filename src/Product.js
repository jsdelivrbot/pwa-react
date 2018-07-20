import React, { Component } from 'react';
import './Product.css';
import logo from './img/cart.png';

class Product extends Component {
	quantity = (event) => {
		var e = document.getElementById("quantity");
		return e.value;

	}
	state ={
			quantity:1
		}
	render() {
		
		return (
			<div className="col-md-3">
			<img id="img1" alt=" " src={this.props.product.src} height="250" width="210" /> <br/>
			<span id="name" > {this.props.product.name } </span> <br/>
			<span id="price"> {this.props.product.price}$ </span> <br/>
			<span id="q"> Quantity: </span><select  id="quantity">
				<option value="1"  defaultValue="1">1</option>
				<option value="2" >2</option>
				<option value="3">3</option>
			</select>
			<br/>
			<button type="button" id="butt" className="btn btn-primary" onClick={this.props.addCart(this.props.index,this.props.index)} >
			<img src={logo} alt=" " width="30" height="30" /> Add to cart</button>
			</div>
			);
		
	}
}

export default Product;

