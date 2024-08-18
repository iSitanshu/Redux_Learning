import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* poora app component k pass store ka access hai store mein reducer hai jo event handle krte hai  */}
    <App />
    </Provider>
  </StrictMode>,
)
