import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/Store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        {/* <PersistGate */}
        <App/>
        <Toaster/>
        </Provider>
    </React.StrictMode>
)
