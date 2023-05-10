import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Spline from './Spline.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Spline />
  </React.StrictMode>,
)
