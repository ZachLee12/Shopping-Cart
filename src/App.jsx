import './_App.scss';
import { Outlet, Link, Form } from 'react-router-dom';
import React from 'react';


export default function App() {
  const initialMounts = {
    sidebar: false,
  }

  const [mount, setMount] = React.useState(initialMounts);

  const handleClickMountSidebar = (e) => {
    setMount({
      ...mount,
      sidebar: !mount.sidebar,
    })
  }

  const handleClickUnmountSidebar = (e) => {
    setMount({
      ...mount,
      sidebar: false,
    })
  }

  return (
    <div id="App">
      <header className='header'>
        <div>Root</div>
        <div className='nagivation-tabs-wrapper'>
          <Link onClick={handleClickMountSidebar} to={'/'} className='navigation-tab'>
            Main
          </Link>

          <Link onClick={handleClickUnmountSidebar} to={'/shop'} className='navigation-tab'>
            Shop
          </Link>

          <Link onClick={handleClickUnmountSidebar} to={'/contact'} className='navigation-tab'>
            Contact
          </Link>

          <Link onClick={handleClickUnmountSidebar} to={'/about'} className='navigation-tab'>
            About
          </Link>
        </div>
      </header>

      <section className="main-content-wrapper">

        {mount.sidebar &&
          <div className='sidebar'>
            <Link to={'/favourites'}>Favourites</Link>
            <Link to={'/cart'} className='link-to-cart'></Link>
          </div>}

        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </section>
    </div>
  )
}
