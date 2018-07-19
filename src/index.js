import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var products = require('./products.json'); 
// forward slashes will depend on the file location

var dbRequest = indexedDB.open("OurStore", 1);
dbRequest.onupgradeneeded = function(event) { 
	var db = event.target.result;
	var objectStore=db.createObjectStore('products', {keyPath: 'id'});
	objectStore.transaction.oncomplete = function(event) {
		var trans = db.transaction('products', 'readwrite');
		var store = trans.objectStore('products');
		for (var i = 0; i < products.length; i++) {
			store.add(products[i]);
		}

	}

}


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


ReactDOM.render( <Main products={products} />
	, document.getElementById('root'));


registerServiceWorker();
