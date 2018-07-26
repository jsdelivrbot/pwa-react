import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

class AddProduct extends Component {
   
  render() {
    
    return (
      <div className="App">   
         <form id="submit1" >
        <legend>Add your prwafwafwafour store</legend>

        <div class="form-group" >
          <label for="">ID</label>
          <input id="id" type="text" class="form-control" id="" placeholder="Input field"/>
          <br/>
          <label for="">Product name</label>
          <input id="name" type="text" class="form-control" id="" placeholder="Input field"/>
          <label for="">Price</label>
          <input id="price" type="text" class="form-control" id="" placeholder="Input field"/>

        </div>
        <button  type="submit" class="btn btn-primary">Submit</button>  
      </form>
      </div>
    );
  }
}

export default AddProduct;



