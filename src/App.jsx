import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { itemList as fullItemList } from './shopItems';

export default function App() {

  const initialState = {
    activeRoute: {
      mainPage: true,
      shop: false,
      contact: false,
      about: false
    },
    mount: {
      sidebar: false,
      cartButton: false,
      mainPage: true
    }
  }

  const [state, setState] = React.useState(initialState);

  const handleClickMain = (e) => {
    mountMainPageComponents();
    setMainPageRouteActive();
  }

  const handleClickShop = (e) => {
    unmountMainPageComponents();
    setShopRouteActive();
  }

  const handleClickContact = (e) => {
    unmountMainPageComponents();
    setContactRouteActive();
  }

  const handleClickAbout = (e) => {
    unmountMainPageComponents();
    setAboutRouteActive();
  }

  const setMainPageRouteActive = () => {
    setState({
      ...state,
      activeRoute: {
        mainPage: true,
        shop: false,
        contact: false,
        about: false
      }
    })
  }

  const setShopRouteActive = () => {
    setState({
      ...state,
      activeRoute: {
        mainPage: false,
        shop: true,
        contact: false,
        about: false
      }
    })
  }

  const setContactRouteActive = () => {
    setState({
      ...state,
      activeRoute: {
        mainPage: false,
        shop: false,
        contact: true,
        about: false
      }
    })
  }

  const setAboutRouteActive = () => {
    setState({
      ...state,
      activeRoute: {
        mainPage: false,
        shop: false,
        contact: false,
        about: true
      }
    })
  }

  const mountMainPageComponents = (e) => {
    setState({
      ...state,
      mount: {
        ...state.mount,
        sidebar: false,
        mainPage: true
      }
    })
  }

  const unmountMainPageComponents = (e) => {
    setState({
      ...state,
      mount: {
        ...state.mount,
        sidebar: true,
        mainPage: false
      }
    })
  }

  //to save the route indicator on browser refresh
  //surely there is a better way than this, but this is OK for now.
  useEffect(() => {
    const initialRoute = window.location.hash
    if (initialRoute.includes('shop')) {
      setState({
        ...state,
        activeRoute: {
          mainPage: false,
          shop: true,
          contact: false,
          about: false
        }
      })
    } else if (initialRoute.includes('contact')) {
      setState({
        ...state,
        activeRoute: {
          mainPage: false,
          shop: false,
          contact: true,
          about: false
        }
      })

    } else if (initialRoute.includes('about')) {
      setState({
        ...state,
        activeRoute: {
          mainPage: false,
          shop: false,
          contact: false,
          about: true
        }
      })
    }
  }, [])

  return (
    <div id="App">
      <div className="opacity-film-wrapper">
        <header className='header'>
          <Link
            to={'/'}
            onClick={handleClickMain}
            className="shop-name"
          >
            Hiker.
          </Link>
          <div className='nagivation-tabs-wrapper'>
            <Link onClick={handleClickMain}
              to={'/'}
              className={`navigation-tab ${state.activeRoute.mainPage ? 'active-tab-color' : ''}`}>
              Main
            </Link>

            <Link
              onClick={handleClickShop}
              to={'/shop'}
              className={`navigation-tab ${state.activeRoute.shop ? 'active-tab-color' : ''}`}>
              Shop
            </Link>
            <Link
              onClick={handleClickContact}
              to={'/contact'}
              className={`navigation-tab ${state.activeRoute.contact ? 'active-tab-color' : ''}`}>
              Contact
            </Link>
            <Link
              onClick={handleClickAbout}
              to={'/about'}
              className={`navigation-tab ${state.activeRoute.about ? 'active-tab-color' : ''}`}>
              About
            </Link>
          </div>
        </header>


        <section className="main-content-wrapper">
          {!state.activeRoute.mainPage && <Link to={'/cart'} className='link-to-cart'>
          </Link>}
          <div className="outlet-wrapper">
            <Outlet />
          </div>

        </section>
      </div>
    </div>
  )
}
