import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddProduct from './AddProduct';
import Search from './Search';
import registerServiceWorker from './registerServiceWorker';



class Main extends Component {
   
  render() {
    
    return (
      <div>
      	<App/> 
      	<Search />
      </div>
    );
  }
}


ReactDOM.render( <Main />
               , document.getElementById('root'));


registerServiceWorker();
