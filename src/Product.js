import React, { Component } from 'react';
import './Product.css';
import logo from './img/cart.png';
import registerServiceWorker from './registerServiceWorker';

class Product extends Component {
	quantity = (event) => {
		console.log(event.target.value);
		if(event.target.value && event.target.value>=1 ){
			console.log(this);
			this.setState({
				quantity:event.target.value
			})
		}

		else {
			console.log("u fut ketu");
			this.setState({
				quantity:0
			
			})
			event.target.value=1;
		}
	}

	intOnly = (e) => {
		e.target.value=e.target.value.replace(/[^0-9]/g,'');
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
			<span id="q"> Quantity: </span> 
			<input id="quantity" type="number" ref="name" min="1" defaultValue={this.state.quantity} 
			onKeyUp={this.intOnly}
			onBlur={this.quantity} />
			

			<br/>
			<button type="button" id="butt" className="btn btn-primary" onClick={this.props.addCart(this.props.index,this.state.quantity)} >
			<img src={logo} alt=" " width="30" height="30" /> Add to cart</button>
			</div>
			);
		
	}
}

export default Product;

registerServiceWorker();