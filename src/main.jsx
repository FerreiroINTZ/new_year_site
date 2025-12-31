// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Create from './create.jsx'

import ContextComp from "./components/view/contxt.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: (<ContextComp><App /></ContextComp>)
  },
  {
    path: "criar",
    element: (<Create />)
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <RouterProvider router={rotas} />,
  {/* </StrictMode>, */}
)
