import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import { Component } from 'react';
// import './index.css';
// import * as serviceWorker from './serviceWorker';



  const client = new ApolloClient({
    uri: 'https://7sgx4.sse.codesandbox.io'
  })


  

  function UserInfo(){
    // ReactDOM.render(){
      return(
        <React.StrictMode>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </React.StrictMode>
        

      )
    // }
        
    

  }
 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

export default UserInfo;
