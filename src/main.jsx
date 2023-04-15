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
import MainPage from './Components/MainPage/MainPage'
import Features from './Routes/Features/Features'
import ThankYou from './Routes/ThankYou/ThankYou'

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', //duplicate path, so <MainPage /> will render as well!
        element: <MainPage />
      },
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
      },
      {
        path: '/feature/:featureType',
        element: <Features />
      },
      {
        path: '/thankyou',
        element: <ThankYou />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={hashRouter} />
  </React.StrictMode>,
)
