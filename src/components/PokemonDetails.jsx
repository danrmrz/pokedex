import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/PokemonDetails.styl'

import formatId from '../utils/formatId'
import capitalize from '../utils/capitalize'

const arrow_icon = 'https://firebasestorage.googleapis.com/v0/b/pokedex-3057e.appspot.com/o/arrow-icon.png?alt=media&token=cd000fd5-9066-4381-8bc4-27e719680b61'
const pokeball_icon = 'https://firebasestorage.googleapis.com/v0/b/pokedex-3057e.appspot.com/o/pokeball-icon-gray-light.png?alt=media&token=d500f55b-c215-4f10-b6f3-49fba3adbf69'

const PokemonDetails = ({ pokemon }) => {
  const id = pokemon.id
  const image = pokemon.sprites.other['official-artwork'].front_default
        ? pokemon.sprites.other['official-artwork'].front_default
        : pokemon.sprites.front_default
  const name = pokemon.name
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
      <div className='pokemon-details__button'>
        <Link
          to='/'
          className='pokemon-details__button--link'
        >
          <img
            src={arrow_icon}
            alt='arrow-icon'
            className='pokemon-details__button--image'
          />
        </Link>
      </div>

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
      <div className='pokemon-details__stats'>
        <div className='pokemon-details__stats--info'>
          <ul className='pokemon-details__stats--info-attributes'>
            <li>{`Height: ${height/10}m`}</li>
            <li>{`Weight: ${weight/10}kg`}</li>
          </ul>
          <span>Abilities:</span>
          <ul className='pokemon-details__stats--info-abilities'>
            {abilities.map(abilitie =>
              <li key={abilitie}>
                <span>
                  {capitalize(abilitie)}
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className='pokemon-details__stats--stats'>
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
      
      {/* <h3 className='pokemon-details__title'>
        Evolution chain:
      </h3> */}
    </div>
  )
}

export default PokemonDetails