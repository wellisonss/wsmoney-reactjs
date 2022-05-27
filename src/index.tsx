import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,

  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
      id: 1,
      title: 'freelance',
      type: 'deposit',
      category: 'mercado',
      value: 6000,
      createdAt: new Date('2021-02-12 09:00:00'),
    } ]
    })},

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request ) => {
      const data = JSON.parse(request.requestBody);

      data.createdAt = new Date();


      return schema.create('transaction', data);
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);