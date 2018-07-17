import React, { Component } from 'react';
import Products from './Products';
import './App.css';



class App extends Component {
	

	render() {

		return (
			<div className="App">   
			<Products products={this.props.products}/>

			</div>
			);
	}
}

export default App;


// class App extends Component {
// 	state = { toggle : true }
// 	toggle = () => {
// 		this.setState({
// 			toggle : !this.state.toggle
// 		})
// 	}

// 	render() {

// 		return (
// 			<div className="App">   
// 			{this.state.toggle && 
// 				<h1> Product name is  {this.props.name} </h1>
// 			}
// 			<button onClick={this.toggle}> Show/hide </button>
// 			<Search  text={this.props.text} toggle={this.state.toggle} />


// 			</div>
// 			);
// 	}


