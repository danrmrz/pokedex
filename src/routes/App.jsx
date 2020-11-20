import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PokemonCardContainer from '../pages/PokemonCardsContainer'
import PokemonDetailsContainer from '../pages/PokemonDetailsContainer'
import Header from '../components/Header'

const App = () => {
  return(
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={PokemonCardContainer} />
        <Route exact path='/:name' component={PokemonDetailsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App