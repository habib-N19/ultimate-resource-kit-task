import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='p-3 max-w-screen md:bg-[#efeff1]'>
      <App />
    </div>
  </React.StrictMode>
)
