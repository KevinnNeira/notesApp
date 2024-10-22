import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '../router/RouterApp.jsx'
import { BrowserRouter } from 'react-router-dom';
import '../styles/Notes.module.css'
import '../styles/NotesCard.module.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
)
