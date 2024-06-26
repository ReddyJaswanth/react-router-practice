import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/Header'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="main-container">
      <Header />
      <div className="routes-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
