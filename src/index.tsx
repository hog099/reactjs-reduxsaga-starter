import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/dados', () => {
      return [
        {
          id: "1",
          title: "title 01",
          createdAt: new Date()
        },
        {
          id: "2",
          title: "title 02",
          createdAt: new Date()
        },
        {
          id: "3",
          title: "title 03",
          createdAt: new Date()
        }
      ]
    })
    this.post('/session', () => {
      return ( 
        {
          name: "devmaster",
          token: "u213ucds7d6fd7sf7dfdfdsfsd67f6ds7f6ds7fd6sfddfsasd",
          createdAt: new Date()
        }
      )
    })

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
