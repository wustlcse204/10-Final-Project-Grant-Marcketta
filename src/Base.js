import React, { Component } from 'react';
import './App.css';


 class Base extends Component {

  constructor (props){
    super(props);
  }


 render(){
    return(
      <article id="page" className="mainpage">
        <div className = "container">

        <div className = "row">

      
        <div className = "col-3 d-flex justify-content-center ">
          <img onClick = {this.ultimate} src = {"https://upload.wikimedia.org/wikipedia/commons/c/c2/Super_Smash_Bros._Ultimate_Logo.png"} className = "img-responsive logo" width = "70%"  />
        </div>

        <div className = "col-6 d-flex justify-content-center">
          <h1> Smash Compiler </h1>
        </div>
        
        <div className = "col-3 d-flex justify-content-center ">
          <img onClick = {this.melee} src = {"https://www.pngkey.com/png/detail/355-3554183_the-melee-logo-in-hd-http-super-smash.png"} className = "img-responsive logo" width = "70%"  />
        </div>
        </div>

        <div className = "row">

        <div className = "col-12 d-flex justify-content-center">

          <h3> A resource for Smash Data of all shapes and kinds </h3>
        </div>
        </div>

        <div className = "row">

        </div>

        </div>
      </article>
      );
  }

}
export default Base;