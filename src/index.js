
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './Products';
import Cart from './Cart';
import Xat from './Xat';
import registerServiceWorker from './registerServiceWorker';

var dbRequest = indexedDB.open("OurStore", 1);

var products = require('./products.json'); 


var ren = dbRequest.onupgradeneeded = function(event) { 
	var db = event.target.result;
	var objectStore=db.createObjectStore('products', {keyPath: 'id'});
	db.createObjectStore('Cart', {keyPath: 'id'});

	objectStore.transaction.oncomplete = function(event) {
		var trans = db.transaction('products', 'readwrite');
		var store = trans.objectStore('products');
		for (var i = 0; i < products.length; i++) {
			store.add(products[i]);
		}
	}
	
}
ren.onsuccess = function(event) {
	dbRequest.close();
}

class Main extends Component {
	//react router 
	state = { 
		cart:this.props.cart,
		show_cart:false,
		show_xat :false
	}

	addCart = (index,quantity2) =>  (event) =>{
		var quantity1 = parseInt(quantity2);
		if(quantity1>0){
			var p = products[index];
				var id = p.id;
				var price = p.price;
				var src = p.src;
				var name = p.name;
				var quantity= quantity1;
				var product = {
					id:id,
					name:name,
					price:price,
					quantity:quantity1,
					src:src
			}

			var db = dbRequest.result;
			var trans = db.transaction('Cart', 'readwrite').objectStore('Cart');
			var x= trans.add(product);
			//e shtova produktin nese ka qene me perpara atehere
			x.onerror = function(event){
				//duhet trans tjt pasi i pari eshte bugg sepse error
				var trans = db.transaction('Cart', 'readwrite').objectStore('Cart');
				var request1 = trans.get(id);
				request1.onsuccess = function(event) {
					var data = event.target.result;
					data.quantity=data.quantity+quantity;
					trans.put(data);
				}



		}
	}	
	}

	showCart = (event) =>{
		this.setState({
			show_cart : true
		})
	}

	showProducts = (event) =>{
		this.setState({
			show_cart : false,
			show_xat :false
		})
	}

	showXat = (event) => {
		this.setState({
			show_xat:true,
			show_cart:false
		})

	}

	render() {

		return (

			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
					  <div className="navbar-header">
					    <a className="navbar-brand" onClick={this.showProducts}>Taleas</a>
					  </div>
					  <ul className="nav navbar-nav">
					    <li className="active"><a onClick={this.showProducts}>Home</a></li>
					    <li> <a onClick={this.showXat}>Chat with Us</a></li>
					  </ul>
					</div>
				</nav>

				{!this.state.show_cart && !this.state.show_xat &&
					<Products products={this.props.products} addCart={this.addCart} showCart={this.showCart}/> 
				
				}

				{this.state.show_cart && !this.state.show_xat &&
					<Cart />
				}

				{this.state.show_xat && 
					<Xat />
				}
			</div>
			);
	}
}


ReactDOM.render( <Main products={products}  />
	, document.getElementById('root'));


registerServiceWorker();