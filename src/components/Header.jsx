import React from 'react'

import '../assets/styles/components/Header.styl'

import menu_icon from '../assets/static/menu-icon.png'

const Header = () => {
  return(
    <div className="header">
      <div
        className='header__menu-button'
      >
        <img
          src={menu_icon}
          alt='menu-icon'
          className='header__menu-image btn-img'
        />
      </div>
    </div>
  )
}

export default Header