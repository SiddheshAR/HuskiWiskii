import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import CartPage from './pages/CartPage.jsx';
// import AppStore from './utils/appStore.js'


import AppStore from './utils/appStore.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <Provider store={AppStore}>
        <App />
      </Provider>
  </React.StrictMode>,
)
