import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './Products';
import Cart from './Cart';
import registerServiceWorker from './registerServiceWorker';

var products = require('./products.json'); 


var dbRequest = indexedDB.open("OurStore", 1);
dbRequest.onupgradeneeded = function(event) { 
	var db = event.target.result;
	var objectStore=db.createObjectStore('products', {keyPath: 'id'});
	var objectStore=db.createObjectStore('Cart', {keyPath: 'i', autoIncrement: true});

	objectStore.transaction.oncomplete = function(event) {
		var trans = db.transaction('products', 'readwrite');
		var store = trans.objectStore('products');
		for (var i = 0; i < products.length; i++) {
			store.add(products[i]);
		}

	}
}


class Main extends Component {
	//react router 
	state = { 
		cart:this.props.cart,
		show_cart:false
	}

	addCart = (index) =>  (event) =>{
		var p = products[index];
		var id = p.id;
		var name = p.name ;
		var price = p.price;
		var src = p.price;
		var product = {
			id:id,
			name:name,
			price:price,
			src:src
		}
		console.log(product);
		var db = dbRequest.result;
		var trans_c = db.transaction('Cart', 'readwrite');
		var store_c = trans_c.objectStore('Cart');
		store_c.add(product);
	}

	showCart = (event) =>{
		this.setState({
			show_cart : true
		})
	}

	showProducts = (event) =>{
		this.setState({
			show_cart : false
		})
	}

	render() {

		return (
			<div>
				<nav class="navbar navbar-inverse">
					<div class="container-fluid">
					  <div class="navbar-header">
					    <a class="navbar-brand" onClick={this.showProducts}>Taleas</a>
					  </div>
					  <ul class="nav navbar-nav">
					    <li class="active"><a onClick={this.showProducts}>Home</a></li>
					    
					  </ul>
					</div>
				</nav>

				{!this.state.show_cart && 
					<Products products={this.props.products} addCart={this.addCart} showCart={this.showCart}/> 
				
				}

				{this.state.show_cart &&
					<Cart />

				}
			</div>
			);
	}
}


ReactDOM.render( <Main products={products}  />
	, document.getElementById('root'));


registerServiceWorker();
{/*<embed wmode="transparent" src="https://www.xatech.com/web_gear/chat/chat.swf" 
			quality="high" width="640" height="480" name="chat" FlashVars="id=219973837&rl=Albanian" 
			align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" 
			pluginspage="https://xat.com/update_flash.php" />
		*/}