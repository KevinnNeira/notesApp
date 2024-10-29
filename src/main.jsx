import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '../router/RouterApp.jsx'
import { BrowserRouter } from 'react-router-dom';
import './styles/SignUp.css'
import './styles/LogIn.css'
import './styles/NotesCard.module.css'
import './styles/SignUp.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  </StrictMode>
)
