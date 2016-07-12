import React, { Component } from 'react';

//logs Message Event sent from server on loop
const ws = new WebSocket('ws://localhost:3000/test');
ws.addEventListener('message', (e) => { console.log(e); });

//logs Message Event to console on click
const v1 = new WebSocket('ws://localhost:3000/v1/ws');
v1.addEventListener('message', (e) => { console.log(e); });

//logs Message Event to terminal on click
const v2 = new WebSocket('ws://localhost:3000/v2/ws');
v2.addEventListener('message', (e) => { console.log(e); });

//set button style
let style = {
  height: '100px',
  width: '100px'
};

//Main Application component
export default class App extends Component {
    clickHandler() {
      v1.send('foo');
      v2.send('should log to terminal');
    }
    render() {
        return (<button style={style} onClick={() => this.clickHandler()}>ping socket</button>)
    }
}
