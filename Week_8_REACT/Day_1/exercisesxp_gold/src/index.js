import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BootstrapCard from './BootstrapCard';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { celebrities } from './celebrities';
import Planets from './Planets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BootstrapCard title={celebrities[0].title} description={celebrities[0].description} image={celebrities[0].imageUrl} button={celebrities[0].buttonUrl} />
    <BootstrapCard title={celebrities[1].title} description={celebrities[1].description} image={celebrities[1].imageUrl} button={celebrities[1].buttonUrl} />
    <Planets />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
