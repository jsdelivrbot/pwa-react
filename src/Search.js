import React, { Component } from 'react';

class Search extends Component {

	state = { toggle1 : this.props.toggle }
	
	// this.setState({
	// 	toggle1 : "true";
	// })

// nuk lejohet set state brenda render eshte budallik , vetem perdor state per  te njejtin komponent okey

render() {


	console.log(this.state.toggle1)




	return (
		<div >   
		<h1>NGA SEARCHi{this.props.product.id}<br/> {this.props.product.name}<br/> {this.props.product.price} </h1>

		</div>
		);
}
}

export default Search;



	// return (
	// 	<div className="App">   
	// 	{this.toggle}
	// 	<br/>
	// 	{this.props.toggle && 
	// 		<h1> Nga klasa tjt plak {this.props.text} </h1>
	// 	}

	// 	</div>
	// 	);