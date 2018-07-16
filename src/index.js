import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var products =[
{
	id:1, 
	name:"Laptop USB FAN", 
	price:1.29 
},
{
	id:2, 
	name:"I am Groot T-shirt", 
	price:8.89 
},
{
	id:3, 
	name:"Samsung s8 I am groot case", 
	price:8.89 
},
{
	id:4, 
	name:"I am Groot toy", 
	price:3.29 
}
]
class Main extends Component {

	render() {

		return (
			<div>
			<App products={this.props.products}/> 
			</div>
			);
		}
	}


	ReactDOM.render( <Main products={products} />
	, document.getElementById('root'));


	registerServiceWorker();
