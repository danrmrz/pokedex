import React, { useState, useEffect, useRef } from 'react'

import '../assets/styles/pages/PokemonCardsContainer.styl'

import getPokemons from '../utils/getPokemons'
import formatId from '../utils/formatId'
import PokemonCard from '../components/PokemonCard'
import MiniLoader from '../components/MiniLoader'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'

const PokemonCardContainer = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsListEnd, setPokemonsListEnd] = useState(false)
  let pokemons_list = pokemons

  const observer = useRef(null)

  const savePokemons = (api) => {
    getPokemons(api)
      .then(response => pokemons_list = pokemons_list.concat(response))
      .then(response => setPokemons(response))
      .catch(error => console.error(error))
  }

  useEffect(()=>{
    const intersectionObserver = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (pokemons_list.length === 0) {
            savePokemons(API)
          } else if (localStorage.next_list !== 'null') {
            savePokemons(localStorage.next_list)
          } else {
            intersectionObserver.unobserve(observer.current)
            setPokemonsListEnd(true)
          }
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
        pokemons.length === 0
          ? <h1>Loading...</h1>
          : <div className='card-container'>
              {pokemons.map(pokemon =>
                <PokemonCard
                  key={pokemon.id}
                  image={pokemon.image}
                  name={pokemon.name}
                  number={formatId(pokemon.id)}
                />
              )}
            </div>
      }
      {
        pokemonsListEnd === false
          ? <div ref={observer}><MiniLoader></MiniLoader></div>
          : <div></div>
      }
    </>
  )
}

export default PokemonCardContainer