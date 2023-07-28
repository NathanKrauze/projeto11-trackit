import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  GlobalReset from './styles/GlobalReset.js'
import GlobalStyle from './styles/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
