import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Search extends Component {
  
  info(){
    alert();
  }

  render() {
    
    return (
      <div className="App">   
       <div class="container">
        <h1>Search by item's id</h1>
        <div class="row">
          <div class="input-group">
            <input id="id-input" type="text" class="form-control" placeholder="Id..."/>
            <span class="input-group-btn">
              <button onClick={this.info} id="get-product" type="button" class="btn btn-primary">Get!</button>
            </span>
          </div>
        </div>
       </div>

      </div>
    );
  }
}

export default Search;



