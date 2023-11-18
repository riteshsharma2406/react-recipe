import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

const Header = () => {
  return (
    <header className='header' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Recipe App</h1>
            <p>Are You Hungry? Follow us and Prepare a meal...</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header
