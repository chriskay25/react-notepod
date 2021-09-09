import './App.css';
import { Route, Switch } from 'react-router-dom'
import Podcasts from './components/Podcasts'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/podcasts'>
          <Podcasts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
