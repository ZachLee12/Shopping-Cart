import './Root.scss'
import { Outlet, Link, Form } from 'react-router-dom'
import { searchItems } from './shopItems'


export function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  return { searchedItemList: searchItems(q) }
}


export default function Root() {
  

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

      <section className="main-content-wrapper">
        <div className='sidebar'>
          <Form id='search-form'>
            <label className='search-bar-label' htmlFor="search-bar">
              Search
              <input
                type="search"
                id='search-bar'
                name='q'
              />
            </label>
          </Form>
        </div>

        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </section>
    </div>
  )
}
