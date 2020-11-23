import React, { useState, useEffect, useRef } from 'react'

import '../assets/styles/pages/PokemonCardsContainer.styl'

import getPokemons from '../utils/getPokemons'
import getPokemonData from '../utils/getPokemonData'
import minifiedPokemon from '../utils/minifiedPokemon'
import formatId from '../utils/formatId'

import PokemonCard from '../components/PokemonCard'
import Loader from '../components/Loader'
import MiniLoader from '../components/MiniLoader'
import Searcher from '../components/Searcher'

const close_icon = 'https://firebasestorage.googleapis.com/v0/b/pokedex-3057e.appspot.com/o/close-icon-grey.png?alt=media&token=049f179f-8dbe-4304-8bbf-e2987bc6765f'
const API = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
const API_SEARCH = 'https://pokeapi.co/api/v2/pokemon/'

const PokemonCardContainer = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsListEnd, setPokemonsListEnd] = useState(false)
  const [search, setSearch] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState(null)
  const [error, setError] = useState(null)
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
      if (observer.current)
        intersectionObserver.unobserve(observer.current)
    }
  },[])

  const handleSearchPokemon = (pokemon_search) => {
    setSearch(pokemon_search)
    setError(null)
    getPokemonData(`${API_SEARCH}${pokemon_search}`)
      .then(pokemon => minifiedPokemon(pokemon))
      .then(pokemon => setSearchedPokemon(pokemon))
      .catch(error => setError(error))
  }

  const handleCloseSearch = () => {
    setSearch(null)
    setSearchedPokemon(null)
    setError(null)
  }

  if (search !== null && searchedPokemon !== null) {
    return(
      <div className='container'>
        <Searcher handleSetSearch={handleSearchPokemon}></Searcher>
        <button
          className='card-container__close-button'
          onClick={handleCloseSearch}
        >
          <img src={close_icon} alt='close-icon' />
        </button>
        <div className='card-container unique'>
            <PokemonCard
              key={searchedPokemon.id}
              image={searchedPokemon.image}
              name={searchedPokemon.name}
              number={formatId(searchedPokemon.id)}
            />
        </div>
      </div>
    )
  } else if (search !== null && error !== null) {
    return(
      <div className='container'>
        <Searcher handleSetSearch={handleSearchPokemon}></Searcher>
        <button
          className='card-container__close-button'
          onClick={handleCloseSearch}
        >
          <img src={close_icon} alt='close-icon' />
        </button>
        <h1>Ups something went wrong searching: {search}</h1>
      </div>
    )
  }

  return(
    <div className='container'>
      <Searcher handleSetSearch={handleSearchPokemon}></Searcher>
      {
        pokemons.length === 0
          ? <Loader></Loader>
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
          ? <div
              ref={observer}
              className='observer'
            >
              <MiniLoader></MiniLoader>
            </div>
          : <div></div>
      }
    </div>
  )
}

export default PokemonCardContainer