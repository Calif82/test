import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello(){
  let phrase = "React"
  return (
    <h1>hello {phrase} {2000+18}</h1>
  )
}
function SayFullName(props) {
  return(
    <div>
    <h1>My name - {props.name}, Surname - {props.surname}</h1>
    <a href={props.link}>My profile</a>
  </div>
  )
}

function MeetAll() {
  return(
    <div>
      <SayFullName name="Alexey" surname="Secret1" link="vk.com" />
      <SayFullName name="Alex" surname="Secret2" link="onliner.by" />
      <SayFullName name="Alex" surname="Secret3" link="#" />
    </div>
  )
}

// const element = <SayFullName name="Alex" surname="Secret" link="vk.com" />
ReactDOM.render(<MeetAll />, document.getElementById('root'));
registerServiceWorker();
