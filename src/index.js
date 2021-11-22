import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Splash from "./pages/Splash";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Splash /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
