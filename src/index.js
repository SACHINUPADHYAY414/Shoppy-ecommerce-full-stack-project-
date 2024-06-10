import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
      
  
      
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
