import React from 'react'
import { Route, Link } from 'react-router-dom'
import Navigation from '../Common/Navigation'
import Header from '../Common/Header'
import Home from '../Home'
import CodingChallenge from '../CodingChallenge'
import Counter from '../Counter'

const App = () => (
  <div>
    <Navigation />
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/coding-challenge" component={CodingChallenge} />
      <Route exact path="/counter" component={Counter} />
    </main>
  </div>
)

export default App;