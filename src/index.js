import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Script from './script.js';
import json1 from './products.json';
import registerServiceWorker from './registerServiceWorker';

var data = require('./products.json'); // forward slashes will depend on the file location
console.log(data);
window.myArr =[];


//         const script = document.createElement("script");

//         script.src = {Script};
//         script.async = true;

//         document.body.appendChild(script);
    

class Main extends Component {
//react router 
render() {

	return (
		<div>
		<App products={this.props.products}/> 
		</div>
		);
}
}


ReactDOM.render( <Main products={window.myArr} />
	, document.getElementById('root'));


registerServiceWorker();
