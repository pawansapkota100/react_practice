import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/home/aboutus.jsx'
import Contact from './components/home/contactus.jsx'
import Layout from './layout.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
