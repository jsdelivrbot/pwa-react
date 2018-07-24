import React, { Component } from 'react';
import './Cart.css';
import CartProducts from './CartProducts';
import Checkout from './Checkout';

let arr = [];
let total = 0;
let count = 0 ;

class Cart extends Component {
	state = {
		ready1 :false,
		total:2
		
	}

	cartdb = (event2) => {
		arr = [];
		total = 0;
		count =0;
		var dbRequest = indexedDB.open("OurStore", 1);
		dbRequest.onsuccess=function(event){
		var db = dbRequest.result;
		var Tot = db.transaction('Total', 'readwrite').objectStore('Total');

		var cartdb = db.transaction("Cart", "readwrite").objectStore("Cart");
	
		cartdb.openCursor().onsuccess = function(event) {
			var cursor = event.target.result;
			if (cursor) {
				let name =cursor.value.name;
				let id =cursor.value.id;
				let quantity =cursor.value.quantity;
				let price =cursor.value.price;
				let src = cursor.value.src;
				let product = {
					id:id,
					name:name,
					price:price,
					quantity:quantity,
					src:src
				}
				arr.push(product);	
				total=total+ (parseFloat(product.price.toFixed(2)) * parseFloat(product.quantity.toFixed(2)));
				count=count+1;
				// console.log("totali"+total+"count"+count);

				cursor.continue();
			}
			else {
				var dbRequest = indexedDB.open("OurStore", 1);
				dbRequest.onsuccess=function(event){
				var db = dbRequest.result;
				// console.log(db);
				var Tot = db.transaction('Total', 'readwrite').objectStore('Total');
				// console.log(Tot+"       "+total);
				var update = {
					id:"total",
					price: parseFloat(total.toFixed(2))
				}
				var result23 =Tot.put(update);
				// console.log(result23);
				result23.succsess=function(event){ console.log(result23.error)};
			}
				console.log("No more entries!");
				if(!event2.state.ready1){
					event2.setState({
						ready1 : true,
						total:total

					})
				}
			}
		}
		//fut totalin 


		db.close();

		}
	}

/*
	printProducts =(event) => {

		arr.map((product,i) => {
			return <CartProducts  / > 
		})
	}
*/

	refresh_t=(total) => (event) => {
			console.log("dwadawdwatotal nga parent"+total);

			this.setState({
				total : total,
			})
			
			
			
	}

	render() {
		

		return (
			<div>
				{!this.state.ready1 && this.cartdb(this)
				}
				<div className="row"> 
					<div className="col-md-2 col-md-offset-2">
					</div>
					<div className="col-md-2">
						<span id="name1" > Name </span> 
					</div>
					<div className="col-md-2">
						<span id="q1"> Quantity: </span> 
					</div>
					<div className="col-md-2">
						<span id="price1">Price: </span> 
					</div>
					<br/><br/> 
				</div>

				{ this.state.ready1 &&
					
					arr.map((product,i) => {
						return <CartProducts arr={arr} refresh={this.refresh_t}  total={total} count={count} key={i} index={i} product={product}/ > 
					})
				}		
				<Checkout total={this.state.total}  count={count} />

			</div>
			);
		
	}
}

export default Cart;
