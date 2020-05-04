import React, { Component } from 'react';
import './App.css';
import Base from './Base';
import Region from './Region';
import Listings from './Listings';



var snoowrap = require('snoowrap');



class App extends Component {

    constructor (props){
      super(props);
      this.state = { meleeposts: [ ], ultiposts: [ ] };
    }
    componentDidMount(){
      const r = new snoowrap({
        userAgent: 'A random string.',
        clientId: '-0bzUta-4HbkFA',
        clientSecret: 'RT287RG-man9a0r_nw8eSgZgAnI',
        refreshToken: '494759915551-hg1GrUIyIyr5tpOxzppMuCz0aK8'
      });

      var subreddit =  r.getSubreddit('smashbrosultimate');
      var topPosts =  subreddit.getTop({time: 'week', limit: 3});
      let ultdata = [];

      topPosts.forEach((post) => {
      ultdata.push({
        link: post.url,
        text: post.title,
        score: post.score
      })
      });
      console.log(ultdata);

      subreddit =  r.getSubreddit('ssbm');
      topPosts =  subreddit.getTop({time: 'week', limit: 3});
      let meleedata = [];

      topPosts.forEach((post) => {
        meleedata.push({
          link: post.url,
          text: post.title,
          score: post.score
        })
      });
      console.log(meleedata);   


      this.setState({
        meleeposts : meleedata, 
        ultiposts : ultdata
      }, () => {
        console.log("meleeposts");
        console.log(this.state.meleeposts);
        console.log("ultiposts")
        console.log(this.state.ultiposts);
      });

    }




 render(){

    return(
      <div className = "container" id = "whole" className = "app">
      <Base> </Base>
      <Region> </Region>

      {this.state.meleeposts.map((thisMeleePost,index) => (
         <h4> {thisMeleePost.text} </h4>
      ))},
      {this.state.ultiposts.map((thisUltiPost) =>
        <Listings keyUlti = {thisUltiPost}/>
      )}
      </div>
      );
  }

}
export default App;
