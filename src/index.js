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
	var objectStore=db.createObjectStore('Cart', {keyPath: 'id'});

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

	addCart = (index,quantity1) =>  (event) =>{
		console.log(quantity1);
		var p = products[index];
		var id = p.id;
		var name = p.name ;
		var price = p.price;
		var src = p.src;
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
			console.log("bad");
			var request1 = trans.get(id);
			console.log(request1);
			request1.onsuccess = function(event) {
				var data = event.target.result;
				data.quantity=data.quantity+quantity;
				var requestUpdate = trans.put(data);
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
			show_cart : false
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