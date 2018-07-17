import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var products =[
{
	id:1, 
	name:"Laptop USB FAN", 
	price:3.29 ,
	src: "https://i.ebayimg.com/images/g/SfQAAOSwbtNaBnS3/s-l1600.jpg"

},
{
	id:2, 
	name:"I am Groot T-shirt", 
	price:8.89 ,
	src: "https://i.ebayimg.com/images/g/HXoAAOSwhzRaWFA5/s-l1600.jpg"
},
{
	id:3, 
	name:"Samsung s8 I am groot case", 
	price:3.99 ,
	src: "https://i.ebayimg.com/images/g/xp8AAOSwxphbId4S/s-l1600.jpg"
},
{
	id:4, 
	name:"I am Groot toy", 
	price:3.29 ,
	src: "https://i.ebayimg.com/images/g/ZpMAAOSw7GRZHVFw/s-l1600.jpg"
},
{
	id:5, 
	name:"UGREEN Quick Charge 3.0", 
	price:13.29 ,
	src: "https://i.ebayimg.com/images/g/HWIAAOSwSeVaLj3M/s-l1600.jpg"

},
{
	id:6, 
	name:"Bluetooth Car Charger + MP3", 
	price:8.89 ,
	src: "https://i.ebayimg.com/images/g/R2oAAOSwh5hbC-sB/s-l500.jpg"
},
{
	id:7, 
	name:"Fujifilm Instax Instant Camera", 
	price:88.19 ,
	src: "https://i.ebayimg.com/images/g/ZTUAAOSwuINbRcx-/s-l1600.jpg"
},
{
	id:8, 
	name:"ZOSI Security Camera System", 
	price:3.29 ,
	src: "https://i.ebayimg.com/images/g/2zEAAOSwZrdbRKqN/s-l1600.jpg"
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
