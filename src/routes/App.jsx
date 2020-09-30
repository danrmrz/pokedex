import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PokemonCardContainer from '../components/PokemonCardsContainer'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PokemonCardContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App