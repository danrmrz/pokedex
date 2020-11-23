import React, { useState, useEffect } from 'react'

import getPokemonData from '../utils/getPokemonData'
import PokemonDetails from '../components/PokemonDetails'
import Loader from '../components/Loader'

const API = 'https://pokeapi.co/api/v2/pokemon/'

const PokemonDetailsContainer = (props) => {
  const [pokemon, setPokemon] = useState(null)
  
  const name = props.match.params.name

  useEffect(() => {
    getPokemonData(`${API}${name}`)
      .then(response => setPokemon(response))
      .catch(error => console.error(error))
  }, [])

  return(
    <div className='container'>
      {
        pokemon
          ? <PokemonDetails pokemon={pokemon}></PokemonDetails>
          : <Loader></Loader>
      }
    </div>
  )
}

export default PokemonDetailsContainer