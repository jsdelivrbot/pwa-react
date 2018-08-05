
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './Products';
import Cart from './Cart';
import Xat from './Xat';
import registerServiceWorker from './registerServiceWorker';

var dbRequest = indexedDB.open("OurStore", 1);

var products = 
[ 
{
	"id":"0", 
	"name":"Laptop USB FAN", 
	"price":3.29 ,
	"src": "https://i.ebayimg.com/images/g/SfQAAOSwbtNaBnS3/s-l1600.jpg"

},
{
	"id":"1", 
	"name":"I am Groot T-shirt", 
	"price":8.89 ,
	"src": "https://i.ebayimg.com/images/g/HXoAAOSwhzRaWFA5/s-l1600.jpg"
},
{
	"id":"2", 
	"name":"Samsung s8 I am groot case", 
	"price":3.99 ,
	"src": "https://i.ebayimg.com/images/g/xp8AAOSwxphbId4S/s-l1600.jpg"
},
{
	"id":"3", 
	"name":"I am Groot toy", 
	"price":3.29 ,
	"src": "https://i.ebayimg.com/images/g/ZpMAAOSw7GRZHVFw/s-l1600.jpg"
},
{
	"id":"4", 
	"name":"UGREEN Quick Charge 3.0", 
	"price":13.29 ,
	"src": "https://i.ebayimg.com/images/g/HWIAAOSwSeVaLj3M/s-l1600.jpg"

},
{
	"id":"5", 
	"name":"Bluetooth Car Charger + MP3", 
	"price":8.89 ,
	"src": "https://i.ebayimg.com/images/g/R2oAAOSwh5hbC-sB/s-l500.jpg"
},
{
	"id":"6", 
	"name":"Fujifilm Instax Instant Camera", 
	"price":88.19 ,
	"src": "https://i.ebayimg.com/images/g/ZTUAAOSwuINbRcx-/s-l1600.jpg"
},
{
	"id":"7", 
	"name":"ZOSI Security Camera System", 
	"price":3.29 ,
	"src": "https://i.ebayimg.com/images/g/2zEAAOSwZrdbRKqN/s-l1600.jpg"
}

]


; 


var ren = dbRequest.onupgradeneeded = function(event) { 
	var db = event.target.result;
	var objectStore=db.createObjectStore('products', {keyPath: 'id'});
	db.createObjectStore('Cart', {keyPath: 'id'});
    db.createObjectStore('Total', {keyPath: 'id'});


	objectStore.transaction.oncomplete = function(event) {
		var trans = db.transaction('products', 'readwrite');
		var store = trans.objectStore('products');
		for (var i = 0; i < products.length; i++) {
			store.add(products[i]);
		}
		var trans1 = db.transaction('Total', 'readwrite').objectStore('Total');
		var product={
			id: "total",
			price: 10
		}
		trans1.add(product)

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
					  <ul className="nav navbar-nav navbar-right">
					       <li id="bardh">Free Shipping && Unlimited stock(Just like their talents)</li>
					       
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