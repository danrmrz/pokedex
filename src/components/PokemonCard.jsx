import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/PokemonCard.styl'

import pokeball_icon from '../assets/static/pokeball-icon-white.png'

import capitalize from '../utils/capitalize'


const PokemonCard = ({ image, name, number }) => {

  return(
    <Link
      className='pokemon-card'
      to={`/${name}`}
    >
      <div className='pokemon-card__image--background'>
        <img src={image} alt={`${name}-image`} />
      </div>
      <div className='pokemon-card__info'>
        <div className="pokemon-card__info--name">{`${capitalize(name)}`}</div>
        <div className="pokemon-card__info--number">
          <img src={pokeball_icon} alt='pokeball-icon' />
          <span>{`${number}`}</span>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard