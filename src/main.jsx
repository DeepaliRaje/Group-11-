import { StrictMode } from 'react'
import { createRoot  } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext'
import React from 'react'



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <ShopContextProvider>
//     <App />
//   </ShopContextProvider>
//   </BrowserRouter>,
  
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <ShopContextProvider>
     <App />
   </ShopContextProvider>
   </BrowserRouter>
  </React.StrictMode>
);
