import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './Routes/About/About'
import Contact from './Routes/Contact/Contact'
import ErrorPage from './Routes/Error/Error'
import Shop from './Routes/Shop/Shop'
import Cart from './Routes/Cart/Cart'

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import { loader as shopLoader } from './Routes/Shop/Shop'
import Favourites from './Routes/Favourites/Favourites'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
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
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
