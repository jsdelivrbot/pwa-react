import React, { Component } from 'react';
import Product from './Product';
import './App.css';


class Products extends Component {
	state = { search:""}

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
				<ol>
				{filteredProducts.map((product) => {
					return <Product product={product}  key={product.id} / > 
				})}
				</ol>
				<input type="text" value={this.state.search} onChange={this.update}/> 
			</div>
			);
		}
	}


export default Products;
