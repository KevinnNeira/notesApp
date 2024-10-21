import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/Notes.jsx'
import '../styles/Notes.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
