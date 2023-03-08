import './App.scss'
import { Outlet, Link, Form } from 'react-router-dom'


export default function App() {

  return (
    <div id="App">
      <header className='header'>
        <div>Root</div>
        <div className='nagivation-tabs-wrapper'>
          <Link to={'/'} className='navigation-tab'>
            Main
          </Link>

          <Link to={'/shop'} className='navigation-tab'>
            Shop
          </Link>

          <Link to={'/contact'} className='navigation-tab'>
            Contact
          </Link>

          <Link to={'/about'} className='navigation-tab'>
            About
          </Link>
        </div>
      </header>

      <section className="main-content-wrapper">
        <div className='sidebar'>

          <Link to={'/favourites'}>Favourites</Link>
          <Link to={'/cart'}>My Cart</Link>
        </div>

        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </section>
    </div>
  )
}
