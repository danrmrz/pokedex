import React from 'react'

import '../assets/styles/components/PokemonDetails.styl'

import pokeball_icon from '../assets/static/pokeball-icon-gray-light.png'

import formatId from '../utils/formatId'
import capitalize from '../utils/capitalize'

const PokemonDetails = ({ pokemon }) => {
  const id = pokemon.id
  const image = pokemon.sprites.other['official-artwork'].front_default
  const name = pokemon.forms[0].name
  const types = pokemon.types.map(type => type.type.name)
  const height = pokemon.height
  const weight = pokemon.weight
  const abilities = pokemon.abilities.map(ability => ability.ability.name)
  const stats = pokemon.stats.map(stat => {
    return({
      name: stat.stat.name,
      base_stat: stat.base_stat
    })
  })
  // const evolution_chain

  return(
    <div className='pokemon-details'>
      <div className='pokemon-details__image'>
        <h2 className='pokemon-details__image--id'>
          <img
            src={pokeball_icon}
            alt='pokeball-icon'
            className='pokemon-details__image--id-img'
          />
          {formatId(id)}
        </h2>
      </div>
      <img
        src={image}
        alt={`${name}-image`}
        className='pokemon-details__image--img'
      />
      <h1 className='pokemon-details__name'>
        {capitalize(name)}
      </h1>

      <h3 className='pokemon-details__title'>
        Types:
      </h3>
      <ul className='pokemon-details__types'>
        {types.map(type => 
          <li key={type}>
            <span>
              {capitalize(type)}
            </span>
          </li>
        )}
      </ul>

      <h3 className='pokemon-details__title'>
        Stats:
      </h3>
      <div className="pokemon-details__stats">
        <div className="pokemon-details__stats--info">
          <ul className="pokemon-details__stats--info-attributes">
            <li>{`Height: ${height/10}m`}</li>
            <li>{`Weight: ${weight/10}kg`}</li>
          </ul>
          <span>Abilities:</span>
          <ul className="pokemon-details__stats--info-abilities">
            {abilities.map(abilitie =>
              <li key={abilitie}>
                <span>
                  {capitalize(abilitie)}
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className="pokemon-details__stats--stats">
          <ul>
            {stats.map(stat =>
              <li key={stat.name}>
                <span>
                  {`${capitalize(stat.name)}: ${stat.base_stat}`}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
      
      <h3 className='pokemon-details__title'>
        Evolution chain:
      </h3>
    </div>
  )
}

export default PokemonDetails