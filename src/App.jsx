import './_App.scss';
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { itemList as fullItemList } from './shopItems';
import MainPage from './Components/MainPage/MainPage';

export default function App() {
  const initialMounts = {
    sidebar: false,
    cartButton: false,
    mainPage: true
  }

  const [mount, setMount] = React.useState(initialMounts);

  const mountMainPageComponents = (e) => {
    setMount({
      ...mount,
      mainPage: true,
      sidebar: false,
    })
  }

  const unmountMainPageComponents = (e) => {
    setMount({
      ...mount,
      mainPage: false,
      sidebar: true,
    })
  }

  return (
    <div id="App">
      <div className="opacity-film-wrapper">
        <header className='header'>
          <div>Root</div>
          <div className='nagivation-tabs-wrapper'>
            <Link onClick={mountMainPageComponents}
              to={'/'}
              className='navigation-tab'>
              Main
            </Link>
            <Link onClick={unmountMainPageComponents} to={'/shop'} className='navigation-tab'>
              Shop
            </Link>
            <Link onClick={unmountMainPageComponents} to={'/contact'} className='navigation-tab'>
              Contact
            </Link>
            <Link onClick={unmountMainPageComponents} to={'/about'} className='navigation-tab'>
              About
            </Link>
          </div>
        </header>


        <section className="main-content-wrapper">

          <MainPage shouldMount={mount.mainPage} />

          {mount.sidebar &&
            <div className='sidebar'>
              <Link to={'/favourites'}>Favourites</Link>
            </div>}

          <Link to={'/cart'} className='link-to-cart'>
            <div className="number-of-cart-items">
              {fullItemList.filter(item => item.addedToCart).length}
            </div>
          </Link>
          <div className="outlet-wrapper">
            <Outlet />
          </div>

        </section>


      </div>
    </div>
  )
}
