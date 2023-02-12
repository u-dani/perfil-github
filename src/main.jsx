import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/pages/Home'
import Perfil from './components/pages/Perfil'

const router = createBrowserRouter([
  {
    path: "perfil-github",
    element: <App/>,
    children: [
      {
        path: "/perfil-github",
        element: <Home/>
      },
      {
        path: "/perfil-github/perfil",
        element: <Perfil/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
