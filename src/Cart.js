import React, { Component } from 'react';
import './Cart.css';
import CartProducts from './CartProducts';



let arr = [];


class Cart extends Component {
	state = {
		ready1 :false
	}

	cartdb = (event2) => {
		var dbRequest = indexedDB.open("OurStore", 1);
		dbRequest.onsuccess=function(event){
		var db = dbRequest.result;
		var cartdb = db.transaction("Cart", "readwrite").objectStore("Cart");
		arr = [];
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
				cursor.continue();
			}
			else {
				console.log("No more entries!");
				if(!event2.state.ready1){
					event2.setState({
						ready1 : true
					})
				}
			}
		}
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

	render() {
		return (
			<div>

				{!this.state.ready1 && this.cartdb(this)
				}

				{ this.state.ready1 &&	
					arr.map((product,i) => {
						return <CartProducts  key={i} index={i} product={product}/ > 
					})
				}		

				<h1> renaldo</h1>
			</div>
			);
		
	}
}

export default Cart;
