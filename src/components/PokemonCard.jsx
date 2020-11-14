import React from 'react'

import '../assets/styles/components/PokemonCard.styl'

import pokeball_icon from '../assets/static/pokeball-icon-gray.png'

const capitalize = string => {
  return(
    string.replace(
      /^\w/,
      (letter) => letter.toUpperCase()
    )
  )
}


const PokemonCard = ({ image, name, number, link }) => {
  name = capitalize(name)

  return(
    <a
      className='pokemon-card'
      href={link}
    >
      <div className='pokemon-card__image--background'>
        <img src={image} alt={`${name}-image`}/>
      </div>
      <div className='pokemon-card__info'>
        <div className="pokemon-card__info--name">{`${name}`}</div>
        <div className="pokemon-card__info--number">
          <img src={pokeball_icon} alt='pokeball-icon' />
          <span>{`${number}`}</span>
        </div>
      </div>
    </a>
  )
}

export default PokemonCard