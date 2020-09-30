import React from 'react'

import PokemonCard from './PokemonCard'

const PokemonCardContainer = () => {
  return(
    <div className="card-container">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  )
}

export default PokemonCardContainer