import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import About from './Routes/About/About'
import Contact from './Routes/Contact/Contact'
import ErrorPage from './Routes/Error/Error'
import Shop from './Routes/Shop/Shop'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { loader as shopLoader } from './Routes/Shop/Shop'
import Favourites from './Routes/Favourites/Favourites'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: shopLoader
      },
      {
        path: '/favourites',
        element: <Favourites />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
