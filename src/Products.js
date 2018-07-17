import React, { Component } from 'react';
import Product from './Product';
import './App.css';
import './Products.css';

class Products extends Component {
	state = { 
		search:"",
		products: this.props.products

	}

	//kshu behet kur ndryshojme state
	update = (event) =>{
		this.setState({
			search : event.target.value.substr(0,20)
		})
		console.log(this.state.search);
	}


	render() {

		var filteredProducts = this.props.products.filter(
			(product) =>{
				return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
			}
		);
		return (
			<div >   

				{/* <form onSubmit={this.addProduct}>
				A JSX comment 
					<input type="text" ref="name" placeholder="Name"/>
					<input type="text" ref="price" placeholder="$"/>
					<button type="submit"  > Add this product </button>
				</form> ––> 
				*/}
				<input  id="search" type="text" placeholder="Search" value={this.state.search} onChange={this.update}/> 
				<br/> <br/>
				<div className="row" >
					{filteredProducts.map((product) => {
						return <Product product={product}  key={product.id} / > 
					})}

				</div>



			</div>
			);
		}
}


export default Products;

	{/*addProduct =(event) => {
		event.preventDefault();
		//kjo i nxjerr gjitha props e state e refse
		//console.log(this);
		var name= this.refs.name.value;
		var price= this.refs.price.value;
		var id=Math.floor((Math.random()*100)+1);
		var src = "https://i.ebayimg.com/thumbs/images/g/f4cAAOSwkSlbAn~0/s-l225.jpg"
		price=parseFloat(price);
		
		this.setState({
			products:this.state.products.concat({id,name,price,src})
			// njelloj si id: id     ...
		});
		
		console.log(this);

				
	}
*/}
