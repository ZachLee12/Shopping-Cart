import { useState } from 'react'
import './Root.scss'
import { Outlet, Link } from 'react-router-dom'

function Root() {


  return (
    <div id="Root">
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

      <div className="main-content-wrapper">
        <div className='sidebar'>
          <label className='search-bar-label' htmlFor="search-bar">
            Search
            <input type="text" id='search-bar' />
          </label>
        </div>

        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Root
