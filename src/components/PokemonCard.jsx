import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/PokemonCard.styl'

import capitalize from '../utils/capitalize'

const pokeball_icon = 'https://firebasestorage.googleapis.com/v0/b/pokedex-3057e.appspot.com/o/pokeball-icon-white.png?alt=media&token=e8e6667e-2b19-4962-8e90-6f08fa0b5859'

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