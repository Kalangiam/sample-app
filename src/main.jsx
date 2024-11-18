import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRouter from './utils/AppRoutes.jsx'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(AppRouter)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
