import React, { Component } from 'react';
import Product from './Product';
import './App.css';


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

	addProduct =(event) => {
		event.preventDefault();
		//kjo i nxjerr gjitha props e state e refse
		//console.log(this);
		var name= this.refs.name.value;
		var price= this.refs.price.value;
		var id=Math.floor((Math.random()*100)+1);
		price=parseFloat(price);
		
		this.setState({
			products:this.state.products.concat({id,name,price})
			// njelloj si id: id     ...
		});
				console.log(this);

				
	}

	render() {

		var filteredProducts = this.props.products.filter(
			(product) =>{
				return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
			}
		);
		return (
			<div >   

				<form onSubmit={this.addProduct}>
					<input type="text" ref="name" placeholder="Name"/>
					<input type="text" ref="price" placeholder="$"/>
					<button type="submit"  > Add this product </button>
				</form>
				<input type="text" placeholder="Search" value={this.state.search} onChange={this.update}/> 
				<br/> <br/>
				<ol>
					{filteredProducts.map((product) => {
						return <Product product={product}  key={product.id} / > 
					})}
				</ol>



			</div>
			);
		}
}


export default Products;
