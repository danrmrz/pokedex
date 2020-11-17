import fetchData from './fetchData'
import getPokemonData from './getPokemonData'

const getPokemons = async (api) => {
  try {
    const poke_list = await fetchData(api)
    localStorage.setItem('next_list', poke_list.next)
    const poke_urls = poke_list.results.map(poke => poke.url)
    const poke_data_promises = poke_urls.map(url => getPokemonData(url))
    let poke_data_list = await Promise.all(poke_data_promises)
    poke_data_list = poke_data_list.map(pokemon => {
      return({
        id: pokemon.id,
        name: pokemon.forms[0].name,
        image: pokemon.sprites.other["official-artwork"].front_default
      })
    })
    return(poke_data_list)
  } catch (error) {
    console.error(error)
    return error
  }
}

export default getPokemons