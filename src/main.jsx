import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import WhatsappIcon from './user/components/WhatsappIcon.jsx';
import Footer from './user/components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WhatsappIcon/>
    <Footer/>
  </React.StrictMode>,
)
