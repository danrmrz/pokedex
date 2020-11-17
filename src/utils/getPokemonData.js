import fetchData from './fetchData'

const getPokemonData = async (api) => {
  try {
    const pokemon = await fetchData(api)
    return pokemon
  } catch (error) {
    console.error(error)
    return error
  }
}

export default getPokemonData