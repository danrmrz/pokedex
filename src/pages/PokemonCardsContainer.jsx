import React, { useState, useEffect, useRef } from 'react'

import '../assets/styles/pages/PokemonCardsContainer.styl'

import getPokemons from '../utils/getPokemons'
import formatId from '../utils/formatId'
import PokemonCard from '../components/PokemonCard'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'

const PokemonCardContainer = () => {
  const [pokemons, setPokemons] = useState([])
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
            {/* id: pokemon.id,
            name: pokemon.forms[0].name,
            image: pokemon.sprites.other["official-artwork"].front_default,
            link: api */}
              {pokemons.map(pokemon =>
                <PokemonCard
                  // key={poke.id}
                  // image={poke.sprites.other["official-artwork"].front_default}
                  // name={poke.forms[0].name}
                  // number={formatId(poke.id)}
                  key={pokemon.id}
                  image={pokemon.image}
                  name={pokemon.name}
                  number={formatId(pokemon.id)}
                />
              )}
            </div>
      }
      <div className='loader' ref={observer}></div>
    </>
  )
}

export default PokemonCardContainer