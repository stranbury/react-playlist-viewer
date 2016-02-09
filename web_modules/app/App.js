import React, { Component } from 'react';
import List from "List";
import consts from "./consts";
// const artists = [
//   {name:"Bob Marley"},
//   {name:"Bob Dylan"},
//   {name:"Odezenne"},
//   {name:"Kavinsky"}
// ]

const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });

export default class App extends Component {
  //default state
  state = {
    artists: []
  };
  componentDidMount(){
    console.log("I'm rendering");
    // fetch("https://api.spotify.com/v1/search?query=Bob&offset=0&limit=20&type=artist").then((data)=>{
    //   data.json().then((keke)=>{
    //     this.setState({artists: keke.artists.items});
    //   })
    // });
    this.fetchArtist("bob");

  }
  fetchArtist = (name) =>{
    fetch(consts.api.endpoints.getSearch( name,"artist")).then((data)=>{
      data.json().then((keke)=>{
        this.setState({artists: keke.artists.items});
      })
    });
  };

  render() {
    return (
      <div>
        <List title="Artist" items={this.state.artists} onInputChange={this.fetchArtist} />
        <List title="Kind" items={kindsArray} />
      </div>
    )
  }
}
