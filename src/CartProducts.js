import React, { Component } from 'react';
import './CartProducts.css';
var logo = "https://image.ibb.co/mt4CUT/search_flat.png";
var cart = "https://image.ibb.co/gMcz9T/cart.png";
var ren;
var total = 0.0;
class CartProducts extends Component {
	state = {
		notshow :false,	

	}
	

	remove = (index) => (event2) => {
		var data;
	
		index = index.toString();
		var dbRequest = indexedDB.open("OurStore", 1);
		dbRequest.onsuccess=function(event){
			var db = dbRequest.result;
			var db1 = dbRequest.result;

			var Tot = db1.transaction('Total', 'readwrite').objectStore('Total');
			var cartdb = db.transaction("Cart", "readwrite").objectStore("Cart");

			var result =cartdb.get(index);
			result.onsuccess = function(event) {
				data = event.target.result.price * event.target.result.quantity ;
			}
				var result23 =Tot.get("total");
				result23.onerror=function(event){ console.log(result23.error)};
				result23.onsuccess=function(event){ 
					total= event.target.result.price;
					total= total - data;
					
					var update = {
						id:"total",
						price:total
					}
					console.log("totali"+total)
					Tot.put(update);
					ren("kot");

				}
			// }
			var objectStoreRequest = cartdb.delete(index);
			objectStoreRequest.onsuccess = function(event) {
			    // report the success of our request
		  
			}
			db.close();
		}
		if(!this.state.notshow){
			this.setState({
				notshow : true,
			})
	}

	}	




	render() {
			ren=this.props.refresh();
			var link="http://localhost/prestashop/api/images/products/"+this.props.product.id+"/"+this.props.product.id_default_image;
			console.log(this.props);
		return (
			<div >
		
				{!this.state.notshow && (<div className="row"> 
					<div className="col-md-2 col-md-offset-2">
						<img id="img2" alt=" " src={link} height="150" width="150" />
						 <br/><br/><br/><br/>
					</div>
						<br/> <br/>
					<div className="col-md-2">
						<span id="name2" > {this.props.product.name} </span> 
					</div>
					<div className="col-md-2">
						<span id="q2"> Quantity: {this.props.product.quantity} </span> 
					</div>
					<div className="col-md-2">
						<span id="price2">Price: {this.props.product.price*this.props.product.quantity}$ </span> 
					</div>
					<div className="col-md-1">
						<button type="button" onClick={this.remove(this.props.product.id)} className="btn btn-default">Remove</button>
					</div>
					
				</div>)}		
			</div>
			);
		
	}
}

export default CartProducts;

