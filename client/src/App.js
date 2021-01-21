import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SoundtrackState from './context/soundtrackState'
import Home from './components/Home'
import Results from './components/Results/Results'
import Seasons from './components/Seasons/Seasons'
import Episodes from './components/Episodes/Episodes'
import Songs from './components/Songs/Songs'
import ShowSongs from './components/Songs/ShowSongs'
import Youtube from './components/Youtube/Youtube'
import Error from './components/Errors/Error'
import SearchDatabase from './components/Database/SearchDatabase'
import Playlist from './components/Playlist/Playlist'

 function App() {
  return (

      <Router>
        <SoundtrackState>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route excat path='/results'>
            <Results/>
          </Route>

          <Route excat path='/seasons'>
            <Seasons/>
          </Route>

          <Route excat path='/episodes'>
            <Episodes/>
          </Route>

          <Route excat path='/songs'>
            <Songs/>
          </Route>

          <Route excat path='/show/songs'>
            <ShowSongs/>
          </Route>

          <Route excat path='/databasesearch'>
            <SearchDatabase/>
          </Route>
          
          <Route excat path="/youtube">
            <Youtube/>
          </Route>

          <Route excat path="/playlist">
            <Playlist/>
          </Route>
          
          <Route path='*'>
            <Error/>
          </Route>
        
        </Switch>
        </SoundtrackState>
      </Router>
  )
}

export default App;
