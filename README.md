# Hiker. (A Shopping Cart project with Vite and React)

Live-Demo: https://zachlee12.github.io/shopping-cart/

Docker-Image: https://hub.docker.com/r/zachleezy/shopping-cart

![image](https://user-images.githubusercontent.com/117311591/233114149-ca86880b-1003-41d8-9dae-8f2d58ddca4d.png)

I wrote this project to learn [React-Router](https://reactrouter.com/en/main) and experiment around with CSS transitions and animations, as well as [Sass](https://sass-lang.com/). 

## Routing Concepts 
Routes are URL patterns that represents a specific endpoint. In this project, the endpoints define which components should be rendered, which are accessible through the headers. Users are able to navigate to different parts of the shop (routes) by clicking the tabs in the header. 


![image](https://user-images.githubusercontent.com/117311591/233122426-72db327e-18b6-41d4-a309-fb472c13ec85.png)


## React Router
React Router allows easy declaration of routes. The routing structure of this project is defined in `main.jsx`: 

```javascript
import {createHashRouter,RouterProvider} from 'react-router-dom'
import { loader as shopLoader } from './Routes/Shop/Shop'

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/shop', element: <Shop />, loader: shopLoader },
      { path: '/favourites', element: <Favourites /> },
      { path: '/cart', element: <Cart /> },
      { path: '/feature/:featureType', element: <Features /> },
      { path: '/thankyou', element: <ThankYou /> }
    ]
  },
])
```

## Run it as a Docker Container!
*image is configured to run at `port 8080`

1. Pull the image from my docker hub.
```
docker pull zachleezy/shopping-cart
```

2. Run a docker container instance.
```
docker run zachleezy/shopping-cart
```

3. Navigate to `localhost:8080`. 



