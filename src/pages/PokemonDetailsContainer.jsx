import React, { useState, useEffect } from 'react'

import getPokemonData from '../utils/getPokemonData'
import PokemonDetails from '../components/PokemonDetails'

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
    <>
      {
        pokemon
          ? <PokemonDetails pokemon={pokemon}></PokemonDetails>
          : <h1>Loading...</h1>
      }
    </>
  )
}

export default PokemonDetailsContainer