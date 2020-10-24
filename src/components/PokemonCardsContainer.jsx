import React from 'react'

import '../assets/styles/components/PokemonCardsContainer.styl'

import PokemonCard from './PokemonCard'

const PokemonCardContainer = () => {
  return(
    <div className='card-container'>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  )
}

export default PokemonCardContainer