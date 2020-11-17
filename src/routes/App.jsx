import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PokemonCardContainer from '../pages/PokemonCardsContainer'
import PokemonDetailsContainer from '../pages/PokemonDetailsContainer'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PokemonCardContainer} />
        <Route exact path='/:name' component={PokemonDetailsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App