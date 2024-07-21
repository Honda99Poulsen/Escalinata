import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'
import LoginContextProvider from './Context/ContextLogin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
        <AppRoutes />
    </LoginContextProvider>
  </React.StrictMode>,
)
