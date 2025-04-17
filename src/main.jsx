import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Test from './components/Test.jsx'
import ToDo from './components/ToDo.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
         <App /> 
         {/* <Test/>  */}
         {/* <ToDo/> */}
    </BrowserRouter>
)
