const minifiedPokemon= (pokemon) => {
  const image = pokemon.sprites.other["official-artwork"].front_default
    ? pokemon.sprites.other["official-artwork"].front_default
    : pokemon.sprites.front_default
  return({
    id: pokemon.id,
    name: pokemon.name,
    image: image
  })
}

export default minifiedPokemon