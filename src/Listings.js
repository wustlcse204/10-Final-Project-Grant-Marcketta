import React, { Component } from 'react';
import './App.css';





class Listings extends Component{
	constructor(props) {
	    super(props);
	 }

	render(){
		return(
		<article className="Listings">
	        <div className = "container">
	         <div className = "row">
	      

	        <div className = "col-6 d-flex justify-content-center">
	        	<img src = {this.props.meleeinfo.link} />
	        </div>

	        <div className = "col-6 d-flex justify-content-center">
	        	<img src = {this.props.ultinfo.link} />
	        </div>

	        </div>


	        <div className = "row">
	      

	        <div className = "col-6 d-flex justify-content-center">
	        	<h4> {this.props.meleeinfo.text} </h4>
	        </div>

	        <div className = "col-6 d-flex justify-content-center">
	        	<h4> {this.props.ultinfo.text} </h4>
	        </div>

	        </div>


	        </div>
	     </article>
		);

		
	}


}

export default Listings;