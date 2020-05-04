import React, { Component } from 'react';
import './App.css';

class Region extends Component{

constructor (props){
    super(props);
}


render(){
	return(
		<div className = "container">
		<div className = "row">

		<div className = "col-6 d-flex justify-content-center" >
			<h4> Ultimate News Feed </h4>
		</div>
		<div className = "col-6 d-flex justify-content-center" >
			<h4> Melee News Feed </h4>
		</div>

		</div>
		</div>
	)

	
}


}

export default Region;