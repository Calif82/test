import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Alexey" surname="Secret1" link="vk.com" />
        <SayFullName name="Alex" surname="Secret2" link="onliner.by" />
        <SayFullName name="Alex" surname="Secret3" link="#" />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

// function Hello(){
//   let phrase = "React"
//   return (
//     <h1>hello {phrase} {2000+18}</h1>
//   )
// }
function SayFullName(props) {
  return(
    <div>
    <h1>My name - {props.name}, Surname - {props.surname}</h1>
    <a href={props.link}>My profile</a>
  </div>
  )
}

// function MeetAll() {
//   return(
//     // <div>
//     //   <SayFullName name="Alexey" surname="Secret1" link="vk.com" />
//     //   <SayFullName name="Alex" surname="Secret2" link="onliner.by" />
//     //   <SayFullName name="Alex" surname="Secret3" link="#" />
//     // </div>
//   )
// }

export default App;
