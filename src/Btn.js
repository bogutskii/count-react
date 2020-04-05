import React from 'react';
import logo from './logo.svg';
import './App.css';

function Btn(props) {
const clickHandler = (val) => {
  props.chResult(val)
  console.log('hello ' + val)
}
  return (<button onClick={props.onClick}> {props.name}</button>

  );
}

export default Btn;
