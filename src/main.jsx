import { StrictMode } from 'react'
import Context from "./context.jsx"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: (<App />)
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Context>
      <RouterProvider router={rotas} />
    </Context>,
  {/* </StrictMode>, */}
)
