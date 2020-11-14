import React, { useState, useEffect, useRef } from 'react'

import '../assets/styles/components/PokemonCardsContainer.styl'

import getPokemons from '../utils/getPokemons'
import PokemonCard from './PokemonCard'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'

const PokemonCardContainer = () => {
  const [pokemons, setPokemons] = useState([])
  let pokemons_list = pokemons

  const savePokemons = (api) => {
    getPokemons(api)
      .then(response => pokemons_list = pokemons_list.concat(response))
      .then(response => setPokemons(response))
      .catch(error => console.error(error))
  }

  const observer = useRef(null)    

  useEffect(()=>{
    const intersectionObserver = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          pokemons_list.length === 0
            ? savePokemons(API)
            : savePokemons(localStorage.next_list)
        }
      },
      {
        rootMargin: '0px 0px 50% 0px'
      }
    )
    intersectionObserver.observe(observer.current)
    
    return function cleanObserver() {
      intersectionObserver.unobserve(observer.current)
    }
  },[])

  return(
    <>
      {
        pokemons.length===0
          ? <h1>Loading...</h1>
          : <div className='card-container'>
              {pokemons.map(poke =>
                <PokemonCard
                  key={poke.id}
                  image={poke.image}
                  name={poke.name}
                  number={poke.id}
                  link={poke.link}
                />
              )}
            </div>
      }
      <div className='loader' ref={observer}></div>
    </>
  )
}

export default PokemonCardContainer