// Importar funcionalidades de react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Uso de index
import './index.css'
//Importa la app
import App from './App.jsx'
// Importar browseroute
import {BrowserRouter} from "react-router"



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>,
 </BrowserRouter>
);
