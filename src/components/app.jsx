import React, { Component } from 'react';

const ws = new WebSocket('ws://localhost:3000/test');
const v1 = new WebSocket('ws://localhost:3000/v1/ws');
const v2 = new WebSocket('ws://localhost:3000/v2/ws');

ws.addEventListener('message', (e) => { console.log(e); });
v1.addEventListener('message', (e) => { console.log(e); });
v2.addEventListener('message', (e) => { console.log(e); });


let style = {
  height: '100px',
  width: '100px'
};

export default class App extends Component {
    clickHandler() {
      v1.send('foo');
      v2.send('should log to terminal');
    }
    render() {
        return (<button style={style} onClick={() => this.clickHandler()}>ping socket</button>)
    }
}
