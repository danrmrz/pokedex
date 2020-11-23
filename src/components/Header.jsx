import React from 'react'

import '../assets/styles/components/Header.styl'

const menu_icon = 'https://firebasestorage.googleapis.com/v0/b/pokedex-3057e.appspot.com/o/menu-icon.png?alt=media&token=d654c13a-4b13-4d43-924f-d25fd709d1ae'

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