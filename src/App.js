import React from 'react';
//import Display from './tools/Display.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';

import './App.css';
import List from './component/List';





export default class App extends React.Component {
  state = {
    id:null,
    title:"",
    isChecked:false,
  };

  /*
  handleCheck = (e) => {
    this.setState({
      isChecked: e.target.checked
    })
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }*/

  

  render() {
    return (
      <div className="App container">
        <Header/>

        <List/>

        <Footer/>
      </div>
    );
  }
}
         