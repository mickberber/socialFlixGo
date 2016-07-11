import React, { Component } from 'react';


const ws = new WebSocket('ws://localhost:3000/v1/ws');

ws.addEventListener('message', (e) => { console.log(e); });

let style = {
  height: '100px',
  width: '100px'
};

export default class App extends Component {
    clickHandler() {
      ws.send('foo');
    }
    render() {
        return (<button style={style} onClick={() => this.clickHandler()}>ping socket</button>)
    }
}
